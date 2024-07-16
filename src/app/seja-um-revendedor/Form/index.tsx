"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import mandrill from 'mandrill-api';

type Inputs = {
	nomeEmpresa: string;
	telefone: string;
	email: string;
	cnpj: string;
	endereco: string;
	faixaFaturamento: string;
	nomeContato: string;
	cargo: string;
	mensagem: string;
};

export function Form() {
	const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
	const [loading, setLoading] = useState<boolean>(false);

	function displayErrors() {
		if (errors) {
			toast.warning('Preencha todos os campos!');
		}
	}

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setLoading(true);

			if (!data.nomeEmpresa || !data.telefone || !data.email || !data.cnpj || !data.endereco || !data.faixaFaturamento || !data.nomeContato || !data.cargo || !data.mensagem) {
				throw new Error('Por favor, preencha todos os campos obrigatórios.');
			}

			const mandrillClient = new mandrill.Mandrill('md-TkMH2UDntO8pD8RG2LaW9Q');

			const message = {
				html: `
					<p><strong>Nome da Empresa:</strong> ${data.nomeEmpresa}</p>
					<p><strong>Telefone:</strong> ${data.telefone}</p>
					<p><strong>E-mail:</strong> ${data.email}</p>
					<p><strong>CNPJ:</strong> ${data.cnpj}</p>
					<p><strong>Endereço:</strong> ${data.endereco}</p>
					<p><strong>Faixa de Faturamento:</strong> ${data.faixaFaturamento}</p>
					<p><strong>Nome do Contato:</strong> ${data.nomeContato}</p>
					<p><strong>Cargo na Empresa:</strong> ${data.cargo}</p>
					<p><strong>Mensagem:</strong> ${data.mensagem}</p>
				`,
				subject: 'Novo pedido de informações de revendedor',
				from_email: 'marcosv.longo@gmail.com',
				from_name: 'Seu Nome',
				to: [
					{
						email: 'marcosv.longo@gmail.com',
						name: 'Nome do Destinatário',
						type: 'to',
					},
				],
			};

			const result = await mandrillClient.messages.send({ message });

			console.log(result);

			toast.success('Mensagem enviada com sucesso!');
			reset();
		} catch (error: any) {
			console.error(error);
			toast.error('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-2/3 flex flex-col gap-4 bg-white shadow-md p-9 rounded-md justify-center">
			<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit, displayErrors)}>
				<div>
					<Input
						className="h-12 text-base"
						type="text"
						placeholder="Nome da empresa"
						{...register('nomeEmpresa', { required: 'Campo obrigatório' })}
					/>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<Input
						className="h-12 text-base"
						type="phone"
						placeholder="Telefone"
						{...register('telefone', { required: 'Campo obrigatório' })}
					/>
					<Input
						className="h-12 text-base"
						type="email"
						placeholder="E-mail"
						{...register('email', { required: 'Campo obrigatório' })}
					/>
				</div>
				<div>
					<Input
						className="h-12 text-base"
						type="text"
						placeholder="CNPJ"
						{...register('cnpj', { required: 'Campo obrigatório' })}
					/>
				</div>
				<div>
					<Input
						className="h-12 text-base"
						type="text"
						placeholder="Endereço"
						{...register('endereco', { required: 'Campo obrigatório' })}
					/>
				</div>
				<div>
					<Select>
						<SelectTrigger className="w-full h-12 text-base">
							<SelectValue placeholder="Faixa de faturamento" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup className="text-base">
								<SelectLabel className="text-base">Faixa de faturamento:</SelectLabel>
								<SelectItem className="text-base" value={"0 á 25.000"}>R$ 0 á R$ 25.000</SelectItem>
								<SelectItem className="text-base" value={"25.001 á 50.000"}>R$ 25.001 á R$ 50.000</SelectItem>
								<SelectItem className="text-base" value={"50.001 á 100.000"}>R$ 50.001 á R$ 100.000</SelectItem>
								<SelectItem className="text-base" value={"100.001 á 300.000"}>R$ 100.001 á R$ 300.000</SelectItem>
								<SelectItem className="text-base" value={"300.001 á 600.000"}>R$ 300.001 á R$ 600.000</SelectItem>
								<SelectItem className="text-base" value={"600.001 á 1.000.000"}>R$ 600.001 á R$ 1.000.000</SelectItem>
								<SelectItem className="text-base" value={"acima de 1.000.000"}>Acima de R$ 1.000.000</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<Input
						className="h-12 text-base"
						type="text"
						placeholder="Nome do contato"
						{...register('nomeContato', { required: 'Campo obrigatório' })}
					/>
					<Input
						className="h-12 text-base"
						type="text"
						placeholder="Cargo na empresa"
						{...register('cargo', { required: 'Campo obrigatório' })}
					/>
				</div>
				<div>
					<Textarea
						className="h-40 text-base"
						placeholder="Digite sua mensagem"
						{...register('mensagem', { required: 'Campo obrigatório' })}
					/>
				</div>
				<div className="w-full flex">
					<Button
						className="w-full h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]"
						type="submit"
						disabled={loading}
					>
						{loading ? 'Enviando...' : 'Enviar Mensagem'}
					</Button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
}