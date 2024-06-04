"use client";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

// Tipagem dos dados do mapa
type MapData = [string, number | string][];

// Dados do mapa
export const data: MapData = [
    ["State", "Representantes"],
    ["Acre", "1"],
    ["Alagoas", "1"],
    ["Amapá", "1"],
    ["Amazonas", "1"],
    ["Bahia", "1"],
    ["Ceará", "1"],
    ["Distrito Federal", "1"],
    ["Espírito Santo", "1"],
    ["Goiás", "1"],
    ["Maranhão", "1"],
    ["Mato Grosso", "1"],
    ["Mato Grosso do Sul", "1"],
    ["Minas Gerais", "1"],
    ["Pará", "1"],
    ["Paraíba", "1"],
    ["Paraná", "10"],
    ["Pernambuco", "1"],
    ["Piauí", "1"],
    ["Rio de Janeiro", "1"],
    ["Rio Grande do Norte", "1"],
    ["Rio Grande do Sul", "1"],
    ["Rondônia", "1"],
    ["Roraima", "1"],
    ["Santa Catarina", "1"],
    ["São Paulo", "1"],
    ["Sergipe", "1"],
    ["Tocantins", "1"],
];

// Mapeamento dos representantes por estado
interface RepresentantesPorEstado {
    [key: string]: string[];
}

const representantesPorEstado: RepresentantesPorEstado = {
    "Acre": ["Representante 1"],
    "Alagoas": ["Representante 2"],
    "Amapá": ["Representante 3"],
    "Amazonas": ["Representante 4"],
    "Bahia": ["Representante 5"],
    "Ceará": ["Representante 6"],
    "Distrito Federal": ["Representante 7"],
    "Espírito Santo": ["Representante 8"],
    "Goiás": ["Representante 9"],
    "Maranhão": ["Representante 10"],
    "Mato Grosso": ["Representante 11"],
    "Mato Grosso do Sul": ["Representante 12"],
    "Minas Gerais": ["Representante 13"],
    "Pará": ["Representante 14"],
    "Paraíba": ["Representante 15"],
    "Paraná": ["Representante 16", "Representante 17", "Representante 18", "Representante 19", "Representante 20", "Representante 21", "Representante 22", "Representante 23", "Representante 24", "Representante 25"],
    "Pernambuco": ["Representante 26"],
    "Piauí": ["Representante 27"],
    "Rio de Janeiro": ["Representante 28"],
    "Rio Grande do Norte": ["Representante 29"],
    "Rio Grande do Sul": ["Representante 30"],
    "Rondônia": ["Representante 31"],
    "Roraima": ["Representante 32"],
    "Santa Catarina": ["Representante 33"],
    "São Paulo": ["Representante 34"],
    "Sergipe": ["Representante 35"],
    "Tocantins": ["Representante 36"],
};

export function Representantes(): JSX.Element {
    const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(null);

    return (
        <main className="py-40">
            <div className="container">
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
                        colorAxis: { colors: ["#A60004", "#A60004"] },
                    }}
                    width="100%"
                    height="600px"
                    data={data}
                />
                {estadoSelecionado && (
                    <div>
                        <h2>Representantes de {estadoSelecionado}</h2>
                        <ul>
                            {representantesPorEstado[estadoSelecionado].map((rep, index) => (
                                <li key={index}>{rep}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Representantes;