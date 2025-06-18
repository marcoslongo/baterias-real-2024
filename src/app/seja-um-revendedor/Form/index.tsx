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

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

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
	cidade: string;
	estado: string;
};

export function Form() {
	const { register, handleSubmit, reset, control, formState: { errors } } = useForm<Inputs>();
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
		try {
			setLoading(true);

			const response = await fetch('/api/leads', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Erro ao enviar os dados. Status: ' + response.status);
			}

			toast.success('Mensagem enviada com sucesso!');
			reset();
		} catch (error) {
			console.error('Erro ao enviar:', error);
			toast.error('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full md:w-2/3 flex flex-col gap-4 bg-white shadow-md p-3 md:p-9 rounded-md justify-center">
			<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Input
						className="h-12 text-base"
						type="text"
						placeholder="Nome da empresa"
						{...register('nomeEmpresa', { required: 'Campo obrigatório' })}
					/>
					{errors.nomeEmpresa && <ErrorDisplay message={errors.nomeEmpresa.message!} />}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<Input
							className="h-12 text-base"
							type="tel"
							placeholder="Telefone"
							{...register('telefone', { required: 'Campo obrigatório' })}
						/>
						{errors.telefone && <ErrorDisplay message={errors.telefone.message!} />}
					</div>
					<div>
						<Input
							className="h-12 text-base"
							type="email"
							placeholder="E-mail"
							{...register('email', { required: 'Campo obrigatório' })}
						/>
						{errors.email && <ErrorDisplay message={errors.email.message!} />}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<Input
							className="h-12 text-base"
							type="text"
							placeholder="Cidade"
							{...register('cidade', { required: 'Campo obrigatório' })}
						/>
						{errors.cidade && <ErrorDisplay message={errors.cidade.message!} />}
					</div>
					<div>
						<Controller
							name="estado"
							control={control}
							rules={{ required: 'Campo obrigatório' }}
							render={({ field }) => (
								<Select onValueChange={field.onChange} value={field.value}>
									<SelectTrigger className="w-full h-12 text-base">
										<SelectValue placeholder="Estado" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup className="text-base">
											<SelectLabel>Estado</SelectLabel>
											<SelectItem value="AC">AC</SelectItem>
											<SelectItem value="AL">AL</SelectItem>
											<SelectItem value="AP">AP</SelectItem>
											<SelectItem value="AM">AM</SelectItem>
											<SelectItem value="BA">BA</SelectItem>
											<SelectItem value="CE">CE</SelectItem>
											<SelectItem value="DF">DF</SelectItem>
											<SelectItem value="ES">ES</SelectItem>
											<SelectItem value="GO">GO</SelectItem>
											<SelectItem value="MA">MA</SelectItem>
											<SelectItem value="MT">MT</SelectItem>
											<SelectItem value="MS">MS</SelectItem>
											<SelectItem value="MG">MG</SelectItem>
											<SelectItem value="PA">PA</SelectItem>
											<SelectItem value="PB">PB</SelectItem>
											<SelectItem value="PR">PR</SelectItem>
											<SelectItem value="PE">PE</SelectItem>
											<SelectItem value="PI">PI</SelectItem>
											<SelectItem value="RJ">RJ</SelectItem>
											<SelectItem value="RN">RN</SelectItem>
											<SelectItem value="RS">RS</SelectItem>
											<SelectItem value="RO">RO</SelectItem>
											<SelectItem value="RR">RR</SelectItem>
											<SelectItem value="SC">SC</SelectItem>
											<SelectItem value="SP">SP</SelectItem>
											<SelectItem value="SE">SE</SelectItem>
											<SelectItem value="TO">TO</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							)}
						/>
						{errors.estado && <ErrorDisplay message={errors.estado.message!} />}
					</div>
				</div>

				<div>
					<Input
						className="h-12 text-base"
						type="text"
						placeholder="CNPJ"
						{...register('cnpj', { required: 'Campo obrigatório' })}
					/>
					{errors.cnpj && <ErrorDisplay message={errors.cnpj.message!} />}
				</div>

				<div>
					<Input
						className="h-12 text-base"
						type="text"
						placeholder="Endereço"
						{...register('endereco', { required: 'Campo obrigatório' })}
					/>
					{errors.endereco && <ErrorDisplay message={errors.endereco.message!} />}
				</div>

				<div>
					<Controller
						name="faixaFaturamento"
						control={control}
						rules={{ required: 'Campo obrigatório' }}
						render={({ field }) => (
							<Select onValueChange={field.onChange} value={field.value}>
								<SelectTrigger className="w-full h-12 text-base">
									<SelectValue placeholder="Faixa de faturamento" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup className="text-base">
										<SelectLabel>Faixa de faturamento</SelectLabel>
										<SelectItem value="0 a 25.000">R$ 0 a R$ 25.000</SelectItem>
										<SelectItem value="25.001 a 50.000">R$ 25.001 a R$ 50.000</SelectItem>
										<SelectItem value="50.001 a 100.000">R$ 50.001 a R$ 100.000</SelectItem>
										<SelectItem value="100.001 a 300.000">R$ 100.001 a R$ 300.000</SelectItem>
										<SelectItem value="300.001 a 600.000">R$ 300.001 a R$ 600.000</SelectItem>
										<SelectItem value="600.001 a 1.000.000">R$ 600.001 a R$ 1.000.000</SelectItem>
										<SelectItem value="acima de 1.000.000">Acima de R$ 1.000.000</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						)}
					/>
					{errors.faixaFaturamento && <ErrorDisplay message={errors.faixaFaturamento.message!} />}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<Input
							className="h-12 text-base"
							type="text"
							placeholder="Nome do contato"
							{...register('nomeContato', { required: 'Campo obrigatório' })}
						/>
						{errors.nomeContato && <ErrorDisplay message={errors.nomeContato.message!} />}
					</div>
					<div>
						<Input
							className="h-12 text-base"
							type="text"
							placeholder="Cargo na empresa"
							{...register('cargo', { required: 'Campo obrigatório' })}
						/>
						{errors.cargo && <ErrorDisplay message={errors.cargo.message!} />}
					</div>
				</div>

				<div>
					<Textarea
						className="h-40 text-base"
						placeholder="Digite sua mensagem"
						{...register('mensagem', { required: 'Campo obrigatório' })}
					/>
					{errors.mensagem && <ErrorDisplay message={errors.mensagem.message!} />}
				</div>

				<div className="w-full flex">
					<Button
						className="w-full h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]"
						type="submit"
						disabled={loading}
					>
						{loading ? "Enviando..." : "Enviar"}
					</Button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
}

interface ErrorDisplayProps {
	message: string;
}

function ErrorDisplay({ message }: ErrorDisplayProps) {
	return (
		<p className="text-[#DF0209] mt-2">{message}</p>
	);
}