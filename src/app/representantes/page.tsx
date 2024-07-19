"use client";
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { FaLocationDot } from "react-icons/fa6";
import { Card } from "./Card";
import { getRepresentantes } from "../api/getRepresentantes";

interface Representante {
	nome: string;
	telefone: string;
	regiao: string;
}

interface RepresentantesPorEstado {
	[key: string]: Representante[];
}

const fetchRepresentantesData = async (): Promise<RepresentantesPorEstado> => {
	try {
		const estados = await getRepresentantes();
		const representantesPorEstadoTemp: RepresentantesPorEstado = {};

		estados.forEach((estadoEdge) => {
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

export function Representantes() {
	const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(null);
	const [representantesPorEstado, setRepresentantesPorEstado] = useState<RepresentantesPorEstado>({});

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
	};

	const data = [
		["Estado", "Representantes"],
		...Object.keys(representantesPorEstado).map((estado) => [estado, representantesPorEstado[estado].length]),
	];

	const options = {
		region: "BR",
		resolution: "provinces",
		displayMode: "regions",
		colorAxis: {
			colors: ['#DF0209', '#DF0209'],
		},
		backgroundColor: '#fff',
	};

	return (
		<main className="py-40">
			<div className="container flex justify-between">
				<div className="w-[65%] overflow-hidden rounded-lg shadow-lg bg-white">
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
				</div>
				<div className="w-[32%] pr-5 max-h-[600px] overflow-y-scroll">
					{!estadoSelecionado ? (
						<div className="p-6 bg-white rounded-xl shadow-lg mt-52">
							<p className="text-center font-bold text-2xl flex flex-col items-center gap-3">
								<FaLocationDot className="text-[#A60004]" size={40} />
								Selecione um estado e encontre o representante mais próximo de você.
							</p>
						</div>
					) : (
						<div className="flex flex-col gap-4">
							<h2 className="font-bold text-xl">{estadoSelecionado}</h2>
							{representantesPorEstado[estadoSelecionado] && representantesPorEstado[estadoSelecionado].length > 0 ? (
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
						</div>
					)}
				</div>
			</div>
		</main>
	);
}

export default Representantes;
