'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useState } from "react";

type Inputs = {
	razaosocial: string;
	cnpj: string;
	cidade: string;
	estado: string;
	quantidadebateriaslinhaleve: string;
	quantidadebateriaslinhapesada: string;
	datadasolicitacao: string;
	telefone: string;
};

export function Form() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setLoading(true);

		emailjs.send("service_7sfibgj", "template_lj9sryr", data, 'X-auc9xZrgmaFrC7s')
			.then((result) => {
				console.log(result.text);
				toast.success('Solicitação enviada com sucesso!');
				reset();
			}, (error) => {
				console.log(error.text);
				toast.error('Erro ao enviar solicitação.');
			}).finally(() => {
				setLoading(false);
			});
	};

	function displayErrors() {
		if (errors) {
			toast.warning('Preencha todos os campos!');
		}
	}

	return (
		<div className="container">
			<div className="bg-white shadow-md p-9 rounded-md justify-center">
				<form onSubmit={handleSubmit(onSubmit, displayErrors)} className="flex flex-col gap-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<div>
							<label className="block text-sm font-medium text-gray-700">Razão Social</label>
							<Input className="h-12 text-base" type="text" {...register('razaosocial', { required: 'Campo obrigatório' })} />
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">CNPJ</label>
							<Input className="h-12 text-base" type="text" {...register('cnpj', { required: 'Campo obrigatório' })} />
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<div>
							<label className="block text-sm font-medium text-gray-700">Cidade</label>
							<Input className="h-12 text-base" type="text" {...register('cidade', { required: 'Campo obrigatório' })} />
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Estado</label>
							<Input className="h-12 text-base" type="text" {...register('estado', { required: 'Campo obrigatório' })} />
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<div>
							<label className="block text-sm font-medium text-gray-700">Telefone</label>
							<Input className="h-12 text-base" type="text" {...register('telefone', { required: 'Campo obrigatório' })} />
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Data da Solicitação</label>
							<Input className="h-12 text-base" type="date" {...register('datadasolicitacao', { required: 'Campo obrigatório' })} />
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">Quantidade da Baterias Linha Leve</label>
						<Textarea className="h-24 text-base" {...register('quantidadebateriaslinhaleve', { required: 'Campo obrigatório' })} />
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">Quantidade da Baterias Linha Pesada</label>
						<Textarea className="h-24 text-base" {...register('quantidadebateriaslinhapesada', { required: 'Campo obrigatório' })} />
					</div>
					<div className="w-full flex">
						<Button className={`w-full h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]" type="submit ${loading ? 'opacity-80' : 'opacity-100'}`}>
							{loading ? 'Enviando...' : 'Enviar solicitação'}
						</Button>
					</div>
				</form>
				<ToastContainer />
			</div>
		</div>
	);
}