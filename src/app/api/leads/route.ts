import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { nomeEmpresa, telefone, email, cnpj, endereco, faixaFaturamento, nomeContato, cargo, mensagem, cidade, estado } = data;

    if (!nomeEmpresa || !telefone || !email || !cnpj || !endereco || !faixaFaturamento || !nomeContato || !cargo || !mensagem || !cidade || !estado) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        nome: nomeEmpresa,
        telefone,
        email,
        cnpj,
        endereco,
        faixaFaturamento,
        nomeContato,
        cargo,
        mensagem,
        cidade,
        estado,
      },
    });

    return NextResponse.json({ lead }, { status: 201 });
  } catch (error) {
    console.error('Erro ao cadastrar lead:', error);
    return NextResponse.json({ error: 'Erro ao cadastrar lead.' }, { status: 500 });
  }
}
