import { BASE_URL } from '@/constants';
import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/institucional`,
    },
    {
      url: `${BASE_URL}/bateria-ideal`,
    },
    {
      url: `${BASE_URL}/produtos/evolution`,
    },
    {
      url: `${BASE_URL}/produtos/linha-gold`,
    },
    {
      url: `${BASE_URL}/produtos/linha-efb`,
    },
    {
      url: `${BASE_URL}/produtos/linha-convencional`,
    },
    {
      url: `${BASE_URL}/produtos/linha-ecologica`,
    },
    {
      url: `${BASE_URL}/produtos/linha-free`,
    },
    {
      url: `${BASE_URL}/midias/feed`,
    },
    {
      url: `${BASE_URL}/midias/story`,
    },
    {
      url: `${BASE_URL}/representantes`,
    },
    {
      url: `${BASE_URL}/fale-conosco`,
    },
    {
      url: `${BASE_URL}/trabalhe-conosco`,
    },
    {
      url: `${BASE_URL}/seja-um-revendedor`,
    },
    {
      url: `${BASE_URL}/canal-de-denuncias`,
    },
    {
      url: `${BASE_URL}/garantia`,
    },
  ];
}
