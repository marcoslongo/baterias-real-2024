"use client"
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { FaLocationDot } from "react-icons/fa6";
import { RepresentantesData } from "@/@types/Representantes";
import { getRepresentantes } from "@/app/api/getRepresentantes";
import { Card } from "./Card";


export const data = [
	["State"],
	["Acre"],
	["Alagoas"],
	["Amapá"],
	["Amazonas"],
	["Bahia"],
	["Ceará"],
	["Distrito Federal"],
	["Espírito Santo"],
	["Goiás"],
	["Maranhão"],
	["Mato Grosso"],
	["Mato Grosso do Sul"],
	["Minas Gerais"],
	["Pará"],
	["Paraíba"],
	["Paraná"],
	["Pernambuco"],
	["Piauí"],
	["Rio de Janeiro"],
	["Rio Grande do Norte"],
	["Rio Grande do Sul"],
	["Rondônia"],
	["Roraima"],
	["Santa Catarina"],
	["São Paulo"],
	["Sergipe"],
	["Tocantins"],
];

interface Representante {
	nome: string;
	telefone: string;
	regiao: string;
}

interface RepresentantesPorEstado {
	[key: string]: Representante[];
}

export function Representantes() {
	const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(null);
	const [representantesPorEstado, setRepresentantesPorEstado] = useState<RepresentantesPorEstado>({});

	useEffect(() => {
		async function fetchRepresentantes() {
			try {
				const representantes: RepresentantesData = await getRepresentantes();
				const representantesPorEstadoTemp: RepresentantesPorEstado = {};

				representantes.forEach(representanteEdge => {
					const representante = representanteEdge.node;
					representante.representantes.estado.forEach(estado => {
						if (!representantesPorEstadoTemp[estado]) {
							representantesPorEstadoTemp[estado] = [];
						}
						representantesPorEstadoTemp[estado].push({
							nome: representante.title,
							telefone: representante.representantes.telefone,
							regiao: representante.representantes.regiaoAtendida,
						});
					});
				});

				setRepresentantesPorEstado(representantesPorEstadoTemp);
			} catch (error) {
				console.error("Erro ao buscar representantes:", error);
			}
		}

		fetchRepresentantes();
	}, []);

	return (
		<main className="py-40">
			<div className="container flex justify-between">
				<div className="w-[65%] overflow-hidden rounded-lg shadow-lg bg-white">
					<Chart
						chartEvents={[
							{
								eventName: "select",
								callback: ({ chartWrapper }: { chartWrapper: any }) => {
									const chart = chartWrapper.getChart();
									const selection = chart.getSelection();
									if (selection.length === 0) return;
									const state = data[selection[0].row + 1][0] as string;
									setEstadoSelecionado(state);
								},
							},
						]}
						chartType="GeoChart"
						options={{
							region: "BR",
							resolution: "provinces",
							displayMode: "regions",
							defaultColor: '#A60004'
						}}
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
