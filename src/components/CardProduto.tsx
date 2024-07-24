"use client";

import { useEffect, useState } from "react";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import { getProdutoById } from "@/app/api/getProdutosById";
import { Skeleton } from "@/components/ui/skeleton"
import { Produto } from "@/@types/ProdutosBy";


interface Props {
	name: string;
	image: string;
	id: string;
}

export function Card({ name, image, id }: Props) {
	const [produto, setProduto] = useState<Produto | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchProduto() {
			try {
				const produto = await getProdutoById(id);
				if (!produto) {
					throw new Error("Produto não encontrado");
				}
				setProduto(produto);
			} catch (error) {
				console.error("Erro ao buscar produto:", error);
				setError("Erro ao buscar o produto.");
			} finally {
				setLoading(false);
			}
		}

		fetchProduto();
	}, [id]);

	if (loading) {
		return (
			<>
				<Skeleton className="w-full h-[284px] rounded-lg" />
			</>
		);
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!produto) {
		return <div>Produto não encontrado</div>;
	}

	return (
		<div className="bg-white h-[260px] flex flex-col relative rounded-lg shadow-lg overflow-hidden">
			<h3 className="w-full font-bold text-center mt-3 text-xl mb-6">{name}</h3>
			<div className="w-full flex justify-center">
				<Image alt={name} src={image} width={170} height={240} />
			</div>
			<div className="flex w-full justify-end">
				<AlertDialog>
					<AlertDialogTrigger className="bg-[#DF0209] text-white py-2 px-3 hover:underline rounded-tl-xl absolute right-0 bottom-0">
						Ver ficha técnica
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogCancel className="w-10 h-10 p-0 flex items-center justify-center bg-[#DF0209] hover:bg-black text-white absolute right-0">
							<IoIosClose className="text-white" size={36} />
						</AlertDialogCancel>
						<AlertDialogHeader>
							<AlertDialogTitle className="text-center">{produto.title}</AlertDialogTitle>
							<AlertDialogDescription>
								<div className="flex justify-center py-8 border-b-2 border-[#DF0209]">
									<Image
										src={produto.produtos.imageDoProduto.node.mediaItemUrl}
										alt=""
										width={300}
										height={300}
									/>
								</div>
								<ul className="flex flex-col gap-3 mt-8">
									<ItemInfoProd
										image={"/assets/images/ico-bateria.svg"}
										title={"Capacidade:"}
										response={produto.produtos.capacidade}
									/>
									<ItemInfoProd
										image={"/assets/images/ico-peso.svg"}
										title={"Peso:"}
										response={produto.produtos.peso}
									/>
									<ItemInfoProd
										image={"/assets/images/ico-raio.svg"}
										title={"Tensão Nominal:"}
										response={produto.produtos.tensNominal}
									/>
									<ItemInfoProd
										image={"/assets/images/ico-tempo.svg"}
										title={"Corrente de Partida:"}
										response={produto.produtos.correnteDePartida}
									/>
								</ul>
							</AlertDialogDescription>
						</AlertDialogHeader>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</div>
	);
}

interface ItemInfoProdProps {
	image: string;
	title: string;
	response: string;
}

function ItemInfoProd({ title, image, response }: ItemInfoProdProps) {
	return (
		<li className="flex items-center text-black gap-2 text-lg">
			<Image src={image} alt="" width={26} height={26} />
			{title} <span className="text-[#DF0209]">{response}</span>
		</li>
	);
}
