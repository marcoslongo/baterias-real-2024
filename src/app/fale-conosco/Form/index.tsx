'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mandrill from 'mandrill-api';

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
    setLoading(true);

    try {
      if (!data.nome || !data.sobrenome || !data.email || !data.telefone || !data.mensagem) {
        throw new Error('Por favor, preencha todos os campos obrigatórios.');
      }

      const mandrillClient = new mandrill.Mandrill('md-gNo9rHiGZKTIwGQu1-mzNw');
      const message = {
        from_email: 'recepcao@bateriasreal.com.br',
        to: [{ email: 'recepcao@bateriasreal.com.br', type: 'to' }],
        subject: 'Nova Mensagem de Contato',
        html: `
          <p><strong>Nome:</strong> ${data.nome} ${data.sobrenome}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefone:</strong> ${data.telefone}</p>
          <p><strong>Mensagem:</strong> ${data.mensagem}</p>
        `,
      };

      mandrillClient.messages.send({ message }, (result) => {
        console.log(result);
        toast.success('Mensagem enviada com sucesso!');
        reset();
      }, (error) => {
        console.error(error);
        toast.error('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
      });
    } catch (error: any) {
      toast.error(error.message);
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
              type="phone"
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
