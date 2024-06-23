import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";



export default function TrabalheConosco() {
	return (
		<main className="py-40">
			<div className="container min-h-[70vh] grid grid-cols-2 gap-8">
				<div>
					<h2 className="font-bold text-3xl">Vagas disponíveis</h2>
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger><h2 className="text-lg font-bold">Auxiliar de Produção</h2></AccordionTrigger>
							<AccordionContent>
								<div className="flex flex-col gap-4">
									<div>
										<h2 className="font-bold text-lg">Descrição da Vaga</h2>
									</div>
									<div>
										<h2 className="font-bold text-lg">Responsabilidades</h2>
									</div>
									<div>
										<h2 className="font-bold text-lg">Requisitos</h2>
									</div>
									<div>
										<h2 className="font-bold text-lg">Benefícios</h2>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</main>
	);
}