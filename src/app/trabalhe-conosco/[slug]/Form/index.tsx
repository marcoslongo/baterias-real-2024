'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import emailjs from '@emailjs/browser';

type Inputs = {
	nome: string;
	sobrenome: string;
	email: string;
	celular: string;
	endereco: string;
	formacao: string;
	experiencia: string;
	habilidades: string;
};

export function Form() {
	const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
		try {
			setLoading(true);
			
			const templateParams = {
				nome: data.nome,
				sobrenome: data.sobrenome,
				email: data.email,
				celular: data.celular,
				endereco: data.endereco,
				formacao: data.formacao,
				experiencia: data.experiencia,
				habilidades: data.habilidades
			};

			const response = await emailjs.send(
				'service_7sfibgj',
				'template_n7fwxar',
				templateParams,
				'X-auc9xZrgmaFrC7s'
			);

			if (response.status !== 200) {
				throw new Error('Erro ao enviar o e-mail. Status: ' + response.status);
			}

			toast.success('Currículo enviado com sucesso!');
			reset();
		} catch (error: any) {
			console.error('Erro ao enviar e-mail:', error);
			toast.error('Ocorreu um erro ao enviar o currículo. Por favor, tente novamente.');
		} finally {
			setLoading(false);
		}
	};

	function displayErrors() {
		if (Object.keys(errors).length > 0) {
			toast.warning('Preencha todos os campos!');
		}
	}

	return (
		<div className="bg-white rounded-md p-8 shadow">
			<h2 className="font-bold text-2xl mb-4">Cadastre seu currículo</h2>
			<form onSubmit={handleSubmit(onSubmit, displayErrors)} className="flex flex-col gap-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<Input className="h-12 text-base" type="text" placeholder="Nome" {...register('nome', { required: 'Campo obrigatório' })} />
					<Input className="h-12 text-base" type="text" placeholder="Sobrenome" {...register('sobrenome', { required: 'Campo obrigatório' })} />
				</div>
				<div>
					<Input className="h-12 text-base" type="email" placeholder="E-mail" {...register('email', { required: 'Campo obrigatório' })} />
				</div>
				<div>
					<Input className="h-12 text-base" type="phone" placeholder="Celular" {...register('celular', { required: 'Campo obrigatório' })} />
				</div>
				<div>
					<Input className="h-12 text-base" type="text" placeholder="Endereço" {...register('endereco', { required: 'Campo obrigatório' })} />
				</div>
				<div>
					<Textarea className="h-28 text-base" placeholder="Formação Acadêmica" {...register('formacao', { required: 'Campo obrigatório' })} />
				</div>
				<div>
					<Textarea className="h-28 text-base" placeholder="Experiência Profissional" {...register('experiencia', { required: 'Campo obrigatório' })} />
				</div>
				<div>
					<Textarea className="h-28 text-base" placeholder="Habilidades" {...register('habilidades', { required: 'Campo obrigatório' })} />
				</div>
				<div className="w-full flex">
					<Button className="w-full h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]" type="submit" disabled={loading}>
						{loading ? 'Enviando...' : 'Enviar Currículo'}
					</Button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
}
