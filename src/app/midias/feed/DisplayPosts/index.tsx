"use client";
import React, { useState, useEffect } from 'react';
import { DownloadFile } from "@/components/DownloadFile";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MidiaNode, MidiasResponse } from '@/@types/Midias';
import { BsLightningFill } from 'react-icons/bs';
import { getMidias } from '@/app/api/getMidias';

export default function DiplayPosts() {
  const [feed, setFeed] = useState<MidiaNode[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    loadMoreMidias();
  }, []);

  async function loadMoreMidias(cursor: string | null = null) {
    if (loading) return;
    

    setLoading(true);

    try {
      const { edges, pageInfo }: MidiasResponse = await getMidias(cursor);

      if(loading){
        console.log('carregando');
      }

      setFeed(prevFeed => {
        const newFeed = [...prevFeed, ...edges.map(edge => edge.node)];
        return Array.from(new Set(newFeed.map(post => post.id))).map(id => newFeed.find(post => post.id === id)!);
      });

      setHasNextPage(pageInfo.hasNextPage);
      setEndCursor(pageInfo.endCursor);
    } catch (error) {
      console.error("Erro ao obter dados:", error);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  }

  return (
    <div className="container">
      {initialLoading ? (
        <div className="mt-6 flex flex-col items-center justify-center">
          <BsLightningFill
            className="text-[#DF0209] cursor-pointer animate-upDown"
            size={100}
          />
          <h2 className="animate-pulse text-2xl font-bold">Carregando...</h2>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 mb-8">
            {feed.map((post) => (
              (post.camposMidias.adicionarMidia === 'Feed') && (
                <div key={post.id}>
                  <figure className="relative w-full h-[400px]">
                    <Image
                      src={post.camposMidias.imagemFeed.node.mediaItemUrl}
                      alt={post.camposMidias.imagemFeed.node.mediaItemUrl}
                      fill
                      objectFit="cover"
                    />
                  </figure>
                  <div className="flex justify-center mt-4">
                    <DownloadFile url={post.camposMidias.imagemFeed.node.mediaItemUrl} />
                  </div>
                </div>
              )
            ))}
          </div>
          {hasNextPage && (
            <div className="flex container justify-center">
              <Button
                className="font-bold h-12 text-base bg-[#DF0209] hover:bg-[#A60004]"
                onClick={() => loadMoreMidias(endCursor)}
              >
                {loading ? 'Carregando...' : 'Carregar mais'}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
