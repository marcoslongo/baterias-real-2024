"use client";
import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

type MapData = [string | string][];

// Dados do mapa
export const data: MapData = [
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

// Mapeamento dos representantes por estado
interface RepresentantesPorEstado {
    [key: string]: { nome: string; telefone: string; regiao: string }[];
}

const representantesPorEstado: RepresentantesPorEstado = {
    "Acre": [{ nome: "João Silva", telefone: "(68) 99999-9999", regiao: "Região Norte" }],
    "Alagoas": [{ nome: "Maria Oliveira", telefone: "(82) 98888-8888", regiao: "Região Nordeste" }],
    "Amapá": [{ nome: "Pedro Santos", telefone: "(96) 97777-7777", regiao: "Região Norte" }],
    "Amazonas": [{ nome: "Ana Costa", telefone: "(92) 96666-6666", regiao: "Região Norte" }],
    "Bahia": [{ nome: "Carlos Souza", telefone: "(71) 95555-5555", regiao: "Região Nordeste" }],
    "Ceará": [{ nome: "Fernanda Lima", telefone: "(85) 94444-4444", regiao: "Região Nordeste" }],
    "Distrito Federal": [{ nome: "Juliana Gomes", telefone: "(61) 93333-3333", regiao: "Região Centro-Oeste" }],
    "Espírito Santo": [{ nome: "Marcos Pereira", telefone: "(27) 92222-2222", regiao: "Região Sudeste" }],
    "Goiás": [{ nome: "Sofia Andrade", telefone: "(62) 91111-1111", regiao: "Região Centro-Oeste" }],
    "Maranhão": [{ nome: "Ricardo Fernandes", telefone: "(98) 90000-0000", regiao: "Região Nordeste" }],
    "Mato Grosso": [{ nome: "Patrícia Silva", telefone: "(65) 98888-8888", regiao: "Região Centro-Oeste" }],
    "Mato Grosso do Sul": [{ nome: "Bruno Araújo", telefone: "(67) 97777-7777", regiao: "Região Centro-Oeste" }],
    "Minas Gerais": [],
    "Pará": [{ nome: "Beatriz Almeida", telefone: "(91) 95555-5555", regiao: "Região Norte" }],
    "Paraíba": [{ nome: "Tiago Martins", telefone: "(83) 94444-4444", regiao: "Região Nordeste" }],
    "Paraná": [
        { nome: "João Oliveira", telefone: "(41) 93333-3333", regiao: "Curitiba" },
        { nome: "Ana Paula", telefone: "(44) 92222-2222", regiao: "Maringá" },
        { nome: "Carlos Henrique", telefone: "(45) 91111-1111", regiao: "Cascavel" },
        { nome: "Fernanda Ribeiro", telefone: "(43) 90000-0000", regiao: "Londrina" },
        { nome: "Mariana Souza", telefone: "(42) 98888-8888", regiao: "Ponta Grossa" },
        { nome: "Gustavo Lima", telefone: "(46) 97777-7777", regiao: "Sudoeste" },
        { nome: "Ricardo Pereira", telefone: "(41) 96666-6666", regiao: "Metropolitana" },
        { nome: "Luciana Santos", telefone: "(44) 95555-5555", regiao: "Noroeste" },
        { nome: "Marcelo Costa", telefone: "(45) 94444-4444", regiao: "Oeste" },
        { nome: "Aline Barbosa", telefone: "(43) 93333-3333", regiao: "Norte" },
    ],
    "Pernambuco": [{ nome: "Eduardo Lima", telefone: "(81) 92222-2222", regiao: "Região Nordeste" }],
    "Piauí": [{ nome: "Clara Sousa", telefone: "(86) 91111-1111", regiao: "Região Nordeste" }],
    "Rio de Janeiro": [{ nome: "Felipe Carvalho", telefone: "(21) 90000-0000", regiao: "Região Sudeste" }],
    "Rio Grande do Norte": [{ nome: "Bruna Silva", telefone: "(84) 98888-8888", regiao: "Região Nordeste" }],
    "Rio Grande do Sul": [{ nome: "Guilherme Rocha", telefone: "(51) 97777-7777", regiao: "Região Sul" }],
    "Rondônia": [{ nome: "Mateus Duarte", telefone: "(69) 96666-6666", regiao: "Região Norte" }],
    "Roraima": [{ nome: "Larissa Almeida", telefone: "(95) 95555-5555", regiao: "Região Norte" }],
    "Santa Catarina": [{ nome: "Renata Lima", telefone: "(48) 94444-4444", regiao: "Região Sul" }],
    "São Paulo": [{ nome: "Gabriel Santos", telefone: "(11) 93333-3333", regiao: "Região Sudeste" }],
    "Sergipe": [{ nome: "Natália Fernandes", telefone: "(79) 92222-2222", regiao: "Região Nordeste" }],
    "Tocantins": [{ nome: "Leonardo Gomes", telefone: "(63) 91111-1111", regiao: "Região Norte" }],
};

export function Representantes(): JSX.Element {
    const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(null);

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
                <div className="w-[32%] max-h-[600px] overflow-y-scroll">
                    {!estadoSelecionado ? (
                        <p className="text-center font-bold text-2xl flex flex-col items-center mt-32 gap-3">
                            <FaLocationDot className="text-[#A60004]" size={40} />
                            Selecione um estado e encontre o representante mais próximo de você.
                        </p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold text-xl">Representantes de {estadoSelecionado}</h2>
                            {representantesPorEstado[estadoSelecionado] && representantesPorEstado[estadoSelecionado].length > 0 ? (
                                <ul className="flex flex-col gap-5">
                                    {representantesPorEstado[estadoSelecionado].map((rep, index) => (
                                        <li className="flex flex-col bg-white rounded-lg shadow-lg py-3 px-5" key={index}>
                                            <h3 className="flex items-center gap-1 font-bold">{rep.nome}</h3>
                                            <div>
                                                <p className="flex items-center gap-1">
                                                    <FaPhone className="text-[#DF0209]" />{rep.telefone}
                                                </p>
                                                <p className="flex items-center gap-1">
                                                    <FaLocationDot className="text-[#DF0209]" />Região: {rep.regiao}
                                                </p>
                                            </div>
                                        </li>
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
