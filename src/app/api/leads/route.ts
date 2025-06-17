import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    let data;
    try {
      data = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Dados JSON inválidos' },
        { status: 400 }
      );
    }

    const requiredFields = ['nomeEmpresa', 'telefone', 'email'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Campos obrigatórios faltando: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        nomeEmpresa: data.nomeEmpresa,
        telefone: data.telefone,
        email: data.email,
        cnpj: data.cnpj || null,
        endereco: data.endereco || null,
        faixaFaturamento: data.faixaFaturamento || null,
        nomeContato: data.nomeContato || null,
        cargo: data.cargo || null,
        mensagem: data.mensagem || null,
        cidade: data.cidade || null,
        estado: data.estado || null,
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar lead:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('P2002')) {
        return NextResponse.json(
          { error: 'Email ou CNPJ já cadastrado' },
          { status: 409 }
        );
      }
      
      if (error.message.includes('P2003')) {
        return NextResponse.json(
          { error: 'Erro de referência no banco de dados' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 10
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar leads' },
      { status: 500 }
    );
  }
}