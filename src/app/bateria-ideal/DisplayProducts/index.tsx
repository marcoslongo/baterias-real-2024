import React, { useEffect, useState } from 'react';
import { getProdutosBateriaIdeal } from '@/api/getProdutosBateriaIdeal';
import { Card } from '@/components/Card';
import { TbAlertHexagonFilled } from "react-icons/tb";

interface Produto {
	__typename: string;
	id: string;
	title: string;
	produtos: {
		imageDoProduto: {
			node: {
				mediaItemUrl: string;
			}
		}
	}
}

interface TipoDeVeiculo {
	__typename: string;
	id: string;
	name: string;
	produtos: {
		__typename: string;
		edges: {
			__typename: string;
			node: Produto;
		}[];
	};
}

interface DisplayProductsProps {
	tipoId: string;
}

export function DisplayProducts({ tipoId }: DisplayProductsProps) {
	const [produtos, setProdutos] = useState<TipoDeVeiculo | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchProdutos = async () => {
			try {
				const produtosData = await getProdutosBateriaIdeal(tipoId);
				setProdutos(produtosData);
			} catch (error) {
				setError(error as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchProdutos();
	}, [tipoId]);

	if (loading) return <p>Carregando produtos...</p>;
	if (error) return <p>Erro ao carregar produtos: {error.message}</p>;

	if (!produtos) return <p>Nenhum produto encontrado para o tipo de veículo selecionado.</p>;

	return (
		<div className='w-full'>
			<div className='flex flex-col gap-5' key={produtos.id}>
				<div className='w-full text-center'>
					<h3 className='text-lg'>
						Aqui estão nossas baterias para: <span className='italic'>{produtos.name}</span>
					</h3>
				</div>

				{produtos.produtos.edges.length > 0 ? (
					<div className='grid grid-cols-3 gap-8'>
						{produtos.produtos.edges.map(item => (
							<Card
								key={item.node.id}
								name={item.node.title}
								image={item.node.produtos.imageDoProduto.node.mediaItemUrl}
								id={item.node.id}
							/>
						))}
					</div>
				) : (
					<div className='text-center flex flex-col items-center gap-2 mt-6'>
						<TbAlertHexagonFilled className='text-[#DF0209]' size={80} />
						<h2 className='font-bold text-2xl'>Não há produtos <br /> cadastrados nessa categoria.</h2>
					</div>
				)
				}
			</div>
		</div>
	);
}
