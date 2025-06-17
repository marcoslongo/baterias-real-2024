import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const lead = await prisma.lead.create({
      data: {
        nomeEmpresa: data.nomeEmpresa,
        telefone: data.telefone,
        email: data.email,
        cnpj: data.cnpj,
        endereco: data.endereco,
        faixaFaturamento: data.faixaFaturamento,
        nomeContato: data.nomeContato,
        cargo: data.cargo,
        mensagem: data.mensagem,
        cidade: data.cidade,
        estado: data.estado,
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar lead:', error);
    return NextResponse.json(
      { error: 'Erro ao criar lead' },
      { status: 500 }
    );
  }
}
