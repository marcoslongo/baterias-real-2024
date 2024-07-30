import { BASE_URL } from "@/constants/baseUrl";

export async function generateMetadata() {
  return {
    title: 'Encontre a sua Bateria Ideal',
    description: 'Selecione o tipo de veículo para encontrar a bateria ideal para suas necessidades.',
    alternates: {
      canonical: `${BASE_URL}/bateria-ideal`,
    },
  };
}
