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
  nome: string;
  sobrenome: string;
  email: string;
  mensagem: string;
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

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      setLoading(true);

      if (!data.nome || !data.sobrenome || !data.email || !data.telefone || !data.mensagem) {
        throw new Error('Por favor, preencha todos os campos obrigatórios.');
      }

      const templateParams = {
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        mensagem: data.mensagem,
        telefone: data.telefone,
      };

      console.log('Enviando dados:', templateParams); // Para depuração

      const response = await emailjs.send('service_cj9spuz', 'template_mot9fnl', templateParams, 'Nme405_wJLJl-HLvn');

      if (response.status !== 200) {
        throw new Error('Erro ao enviar o e-mail. Status: ' + response.status);
      }

      toast.success('Mensagem enviada com sucesso!');
      reset();
    } catch (error: any) {
      console.error('Erro ao enviar e-mail:', error);
      toast.error('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  function displayErrors() {
    if (errors) {
      toast.warning('Preencha todos os campos!');
    }
  }

  return (
    <>
      <div className="w-2/3 bg-white shadow-md p-9 rounded-md justify-center">
        <form onSubmit={handleSubmit(onSubmit, displayErrors)} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <Input
              className="h-12 text-base"
              type="text"
              placeholder="Nome"
              {...register('nome', { required: 'Campo obrigatório' })}
            />
            <Input
              className="h-12 text-base"
              type="text"
              placeholder="Sobrenome"
              {...register('sobrenome', { required: 'Campo obrigatório' })}
            />
          </div>
          <div>
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
              type="tel"
              placeholder="Telefone"
              {...register('telefone', { required: 'Campo obrigatório' })}
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
            <Button className={`w-full h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]" type="submit ${loading ? 'opacity-80' : 'opacity-100'}`}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
