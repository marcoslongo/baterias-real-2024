"use client";
import { useEffect, useState } from "react";
import { getTiposDeVeiculos } from "@/app/api/getTiposDeVeiculos";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DisplayProducts } from "./DisplayProducts";
import { BsLightningFill } from "react-icons/bs";
import { LoadingPage } from "@/components/LoadingPage";
import { Tipos } from "@/@types/BateriaIdeal";


export default function BateriaIdeal() {
  const [tipos, setTipos] = useState<Tipos>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedTipoId, setSelectedTipoId] = useState<string | null>(null);

  useEffect(() => {
    const fetchTipos = async () => {
      try {
        const data = await getTiposDeVeiculos();
        setTipos(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchTipos();
  }, []);

  if (loading) return (
    <LoadingPage />
  );
  if (error) return <p>Erro ao carregar tipos de veículos: {error.message}</p>;

  return (
    <main className="pt-20 pb-40 min-h-[60vh]">
      <div className="container h-full flex flex-col items-center gap-4">
        <div className="flex flex-col items-center mb-6">
          <h1 className="font-bold text-5xl flex gap-2">
            Encontre a sua Bateria Ideal
            <BsLightningFill className="text-[#DF0209]" />
          </h1>
          <p className="text-lg">Selecione o tipo de veículo que deseja.</p>
        </div>
        <div className="w-full md:w-2/4 bg-white">
          <Select onValueChange={value => setSelectedTipoId(value)}>
            <SelectTrigger className="w-full h-12 text-base">
              <SelectValue placeholder="Selecione um tipo de veículo" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-base">
                <SelectLabel className="text-base">Tipos de Veículos</SelectLabel>
                {tipos.map(tipo => (
                  <SelectItem className="text-base" key={tipo.node.id} value={tipo.node.id}>
                    {tipo.node.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {selectedTipoId && <DisplayProducts tipoId={selectedTipoId} />}
      </div>
    </main>
  );
}
