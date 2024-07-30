'use client'
import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { Card } from './Card';
import { getRepresentantes } from '../../api/getRepresentantes';

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { IoIosClose } from 'react-icons/io';

interface Representante {
	nome: string;
	telefone: string;
	regiao: string;
}

interface RepresentantesPorEstado {
	[key: string]: Representante[];
}

interface RepresentanteNode {
	id: string;
	title: string;
	representantes: {
		regiaoAtendida: string;
		telefone: string;
	};
}

interface EstadoNode {
	id: string;
	name: string;
	representantes: {
		edges: { node: RepresentanteNode }[];
	};
}

interface EstadoEdge {
	node: EstadoNode;
}

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
	const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(null);
	const [representantesPorEstado, setRepresentantesPorEstado] = useState<RepresentantesPorEstado>({});
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
	const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchRepresentantesData();
			setRepresentantesPorEstado(data);
		};

		fetchData();

		const handleResize = () => {
			setIsMobileOrTablet(window.innerWidth < 1024);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
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

	const options = isMobileOrTablet 
		? { ...baseOptions, magnifyingGlass: { enable: true, zoomFactor: 7.5 } } 
		: baseOptions;

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
							options={options}
							width="100%"
							height="600px"
							data={data}
						/>
					)}
				</div>
			</div>
			<AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<AlertDialogTrigger asChild>
					<Button className="hidden">Show Dialog</Button>
				</AlertDialogTrigger>
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
