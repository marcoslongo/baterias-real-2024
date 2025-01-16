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
	infosbaterias: string;
	datadacompra: string;
	nfe: string;
	email: string;
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
						<Input
							className="h-12 text-base"
							type="text"
							placeholder="Razão social"
							{...register('razaosocial', { required: 'Campo obrigatório' })}
						/>
						<Input
							className="h-12 text-base"
							type="text"
							placeholder="CNPJ"
							{...register('cnpj', { required: 'Campo obrigatório' })}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<Input
							className="h-12 text-base"
							type="email"
							placeholder="E-mail"
							{...register('email', { required: 'Campo obrigatório' })}
						/>
						<Input
							className="h-12 text-base"
							type="phone"
							placeholder="Telefone"
							{...register('telefone', { required: 'Campo obrigatório' })}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<Input
							className="h-12 text-base"
							type="text"
							placeholder="Cidade"
							{...register('cidade', { required: 'Campo obrigatório' })}
						/>
						<Input
							className="h-12 text-base"
							type="text"
							placeholder="Estado"
							{...register('estado', { required: 'Campo obrigatório' })}
						/>
					</div>
					<div>
						<Textarea
							className="h-40 text-base"
							placeholder="Modelo + Quantidade + Data da bateria:"
							{...register('infosbaterias', { required: 'Campo obrigatório' })}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<Input
							className="h-12 text-base"
							type="text"
							placeholder="Data da compra"
							{...register('datadacompra', { required: 'Campo obrigatório' })}
						/>
						<Input
							className="h-12 text-base"
							type="text"
							placeholder="NF-e"
							{...register('nfe', { required: 'Campo obrigatório' })}
						/>
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
