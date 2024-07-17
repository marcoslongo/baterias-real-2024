'use client'
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export function Form() {
	return (
		<div>
			<div className="container">
				<Tabs defaultValue="nao-identificado" className="w-full">
					<TabsList className="grid w-full grid-cols-2 gap-8 mb-6">
						<TabsTrigger value="nao-identificado" className="text-base h-12 text-black font-bold border border-[#ccc]">Não gostaria de me identificar</TabsTrigger>
						<TabsTrigger value="identificado" className="text-base h-12 text-black font-bold border border-[#ccc]">Gostaria de me identificar</TabsTrigger>
					</TabsList>
					<TabsContent value="nao-identificado">
						<Card>
							<CardHeader>
								<CardDescription className="text-2xl font-semibold text-black text-center">
									Digite sua reclamação
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<Textarea className="h-40 text-base" placeholder="Mensagem" />
							</CardContent>
							<CardFooter>
								<Button className="h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]">Enviar</Button>
							</CardFooter>
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
								<div className="grid grid-cols-2 gap-6">
									<Input className="h-12 text-base" placeholder="Nome" />
									<Input className="h-12 text-base" placeholder="Sobrenome" />
								</div>
								<div>
									<Textarea className="h-40 text-base" placeholder="Mensagem" />
								</div>
							</CardContent>
							<CardFooter>
								<Button className="h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]">Enviar</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}