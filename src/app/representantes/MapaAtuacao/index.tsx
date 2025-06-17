'use client'
import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { Card } from './Card';
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { IoIosClose } from 'react-icons/io';
import { EstadoEdge, RepresentantesPorEstado } from '@/@types/Representantes';
import { useWindowSize } from '@/hooks/useWindowSize';
import { getRepresentantes } from '@/queries/getRepresentantes';

const fetchRepresentantesData = async (): Promise<RepresentantesPorEstado> => {
	try {
		const estados: EstadoEdge[] = await getRepresentantes();
		const representantesPorEstadoTemp: RepresentantesPorEstado = {};

		estados.forEach((estadoEdge: EstadoEdge) => {
			const estado = estadoEdge.node;
			const estadoNome = estado.name;

			estado.representantes.edges.forEach((representanteEdge) => {
				const representante = representanteEdge.node;
				if (!representantesPorEstadoTemp[estadoNome]) {
					representantesPorEstadoTemp[estadoNome] = [];
				}
				representantesPorEstadoTemp[estadoNome].push({
					nome: representante.title,
					telefone: representante.representantes.telefone,
					regiao: representante.representantes.regiaoAtendida,
					photo: representante.representantes.fotoRepresentante.node.mediaItemUrl
				});
			});
		});

		return representantesPorEstadoTemp;
	} catch (error) {
		console.error("Erro ao buscar representantes:", error);
		return {};
	}
};

const Representantes: React.FC = () => {
	const { width } = useWindowSize();
	const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(null);
	const [representantesPorEstado, setRepresentantesPorEstado] = useState<RepresentantesPorEstado>({});
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchRepresentantesData();
			setRepresentantesPorEstado(data);
		};

		fetchData();
	}, []);

	const handleChartSelect = ({ chartWrapper }: { chartWrapper: any }) => {
		const chart = chartWrapper.getChart();
		const selection = chart.getSelection();
		if (selection.length === 0) return;
		const rowIndex = selection[0].row;
		const dataTable = chartWrapper.getDataTable();
		const state = dataTable.getValue(rowIndex, 0) as string;
		setEstadoSelecionado(state);
		setDialogOpen(true);
	};

	const data = [
		["Estado", "Representantes"],
		...Object.keys(representantesPorEstado).map((estado) => [estado, representantesPorEstado[estado].length]),
	];

	const baseOptions = {
		region: "BR",
		resolution: "provinces",
		displayMode: "regions",
		colorAxis: {
			colors: ['#DF0209', '#DF0209'],
		},
		backgroundColor: '#fff',
		legend: {
			position: 'none',			
		},
	};

	return (
		<div>
			<div className="container flex flex-col lg:flex-row justify-between">
				<div className="w-full overflow-hidden rounded-lg shadow-lg bg-white">
					{typeof window !== 'undefined' && (
						<Chart
							chartEvents={[
								{
									eventName: "select",
									callback: handleChartSelect,
								},
							]}
							chartType="GeoChart"
							options={baseOptions}
							width={width <= 426 ? ('116%') : ('100%')}
							height={width <= 426 ? ('400px') : ('700px')}
							data={data}
						/>
					)}
				</div>
			</div>
			<AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<AlertDialogContent>
					<AlertDialogCancel className="w-10 h-10 p-0 flex items-center justify-center bg-[#DF0209] hover:bg-black text-white absolute right-0">
						<IoIosClose className="text-white" size={36} />
					</AlertDialogCancel>
					<AlertDialogHeader>
						<AlertDialogTitle>Representantes em {estadoSelecionado}</AlertDialogTitle>
					</AlertDialogHeader>
					<AlertDialogDescription>
						{estadoSelecionado && representantesPorEstado[estadoSelecionado] && representantesPorEstado[estadoSelecionado].length > 0 ? (
							<ul className="flex flex-col gap-5">
								{representantesPorEstado[estadoSelecionado].map((rep, index) => (
									<Card
										key={index}
										name={rep.nome}
										phone={rep.telefone}
										region={rep.regiao}
										photo={rep.photo}
									/>
								))}
							</ul>
						) : (
							<p className="text-center font-bold text-xl">
								Não há representantes cadastrados nesse estado. <br />
								Faça parte do nosso time de vendas: <a href="tel:46999831043">(46) 99983-1043</a>
							</p>
						)}
					</AlertDialogDescription>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default Representantes;
