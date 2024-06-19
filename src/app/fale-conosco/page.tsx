import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FaleConosco() {
    return (
        <main className="py-40">
            <div className="container flex flex-col items-center gap-10">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="font-bold text-4xl">Entre em Contato</h1>
                    <p>Estamos aqui para te ajudar</p>
                </div>
                <div className="flex flex-col gap-4 bg-white shadow-md p-9 rounded-md">
                    <div className="grid grid-cols-2 gap-3">
                        <Input type="text" placeholder="Nome" />
                        <Input type="text" placeholder="Sobrenome" />
                    </div>
                    <div>
                        <Input type="email" placeholder="E-mail" />
                    </div>
                    <div>
                        <Input type="phone" placeholder="Celular" />
                    </div>
                    <div>
                        <Textarea placeholder="Digite sua mensagem" />
                    </div>
                    <div className="w-full flex">
                        <Button className="w-full bg-[#DF0209] hover:bg-[#A60004]">Enviar Mensagem</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}