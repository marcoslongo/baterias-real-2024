'use client'
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useState } from "react";

type InputsSemIdentificacao = {
	message: string;
};

type Inputs = {
	nome: string;
	sobrenome: string;
	message: string;
};


export function Form() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();
	const [loading, setLoading] = useState<boolean>(false);

	const [tabValue, setTabValue] = useState<'nao-identificado' | 'identificado'>('nao-identificado');

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setLoading(true);

		const templateParams = {
			...data,
		};

		emailjs.send("service_m3k7tdk", "template_0yl0oji", templateParams, 'lix2tQduRAeE5z2dU')
			.then((result) => {
				console.log(result.text);
				toast.success('Denúncia enviada com sucesso!');
				reset();
			}, (error) => {
				console.log(error.text);
				toast.error('Erro ao enviar Denúncia.');
			}).finally(() => {
				setLoading(false);
			});
	};

	const handleTabChange = (value: string) => {
		if (value === 'nao-identificado' || value === 'identificado') {
			setTabValue(value as 'nao-identificado' | 'identificado');
		}
	};

	const getErrors = (): FieldErrors<Inputs | InputsSemIdentificacao> => {
		if (tabValue === 'identificado') {
			return errors as FieldErrors<Inputs>;
		}
		return errors as FieldErrors<InputsSemIdentificacao>;
	};

	const currentErrors = getErrors();

	function displayErrors() {
		if (errors) {
			toast.warning('Preencha todos os campos!');
		}
	}

	return (
		<div>
			<div className="container">
				<Tabs defaultValue="nao-identificado" onValueChange={handleTabChange} className="w-full">
					<TabsList className="grid w-full md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 mb-20 md:mb-6">
						<TabsTrigger value="nao-identificado" className="text-base h-auto text-black font-bold border border-[#ccc]">Não gostaria de me identificar</TabsTrigger>
						<TabsTrigger value="identificado" className="text-base h-auto text-black font-bold border border-[#ccc]">Gostaria de me identificar</TabsTrigger>
					</TabsList>
					<TabsContent value="nao-identificado">
						<Card>
							<CardHeader>
								<CardDescription className="text-2xl font-semibold text-black text-center">
									Digite sua reclamação
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit, displayErrors)}>
									<Textarea
										{...register("message", { required: true })}
										className="h-40 text-base"
										placeholder="Mensagem"
									/>
									<CardFooter className="p-0">
										<Button
											type="submit"
											className="h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]"
											disabled={loading}
										>
											{loading ? "Enviando..." : "Enviar"}
										</Button>
									</CardFooter>
								</form>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="identificado">
						<Card>
							<CardHeader>
								<CardDescription className="text-2xl font-semibold text-black text-center">
									Informe seus dados e digite sua reclamação
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit, displayErrors)}>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
										<Input
											{...register("nome", { required: tabValue === 'identificado' })}
											className="h-12 text-base"
											placeholder="Nome"
										/>
										<Input
											{...register("sobrenome", { required: tabValue === 'identificado' })}
											className="h-12 text-base"
											placeholder="Sobrenome"
										/>
									</div>
									<Textarea
										{...register("message", { required: true })}
										className="h-40 text-base"
										placeholder="Mensagem"
									/>
									<CardFooter className="p-0">
										<Button
											type="submit"
											className="h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]"
											disabled={loading}
										>
											{loading ? "Enviando..." : "Enviar"}
										</Button>
									</CardFooter>
								</form>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
			<ToastContainer />
		</div>
	);
}
