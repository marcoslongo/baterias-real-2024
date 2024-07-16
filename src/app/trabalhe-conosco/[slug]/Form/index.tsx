'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import mandrill from 'mandrill-api';

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
			if (!data.nome || !data.sobrenome || !data.email || !data.celular || !data.endereco || !data.formacao || !data.experiencia || !data.habilidades) {
				throw new Error('Por favor, preencha todos os campos obrigatórios.');
			}

			const mandrillClient = new mandrill.Mandrill('md-hOCn_sItFPWr1cBKG6FjBA');

			const message = {
				'html': `
					<p><strong>Nome:</strong> ${data.nome} ${data.sobrenome}</p>
					<p><strong>E-mail:</strong> ${data.email}</p>
					<p><strong>Celular:</strong> ${data.celular}</p>
					<p><strong>Endereço:</strong> ${data.endereco}</p>
					<p><strong>Formação Acadêmica:</strong> ${data.formacao}</p>
					<p><strong>Experiência Profissional:</strong> ${data.experiencia}</p>
					<p><strong>Habilidades:</strong> ${data.habilidades}</p>
				`,
				'subject': 'Currículo recebido através do site',
				'from_email': 'rh@bateriasreal.com.br',
				'from_name': 'Nome da sua empresa',
				'to': [
					{
						'email': 'rh@bateriasreal.com.br',
						'name': 'Destinatário',
						'type': 'to'
					}
				]
			};

			mandrillClient.messages.send({ 'message': message }, function (result: any) {
				toast.success('Currículo enviado com sucesso!');
				reset();
			}, function (error: any) {
				toast.error('Ocorreu um erro ao enviar o currículo. Por favor, tente novamente.');
			});

		} catch (error: any) {
			toast.error(error.message);
		}
	};

	function displayErrors() {
		if (errors) {
			toast.warning('Preencha todos os campos!');
		}
	}

	return (
		<div className="bg-white rounded-md p-8 shadow">
			<h2 className="font-bold text-2xl mb-4">Cadastre seu currículo</h2>
			<form onSubmit={handleSubmit(onSubmit, displayErrors)} className="flex flex-col gap-4">
				<div className="grid grid-cols-2 gap-3">
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
					<Button className="w-full h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]">Enviar Currículo</Button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
}
