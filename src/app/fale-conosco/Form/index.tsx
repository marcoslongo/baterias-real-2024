'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  nome: string;
  sobrenome: string;
  email: string;
  mensagem: string;
  telefone: string;
};

export function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      setLoading(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('E-mail enviado com sucesso!');
        reset();
      } else {
        toast.error('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      toast.error('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
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
            <Button className="w-full h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
