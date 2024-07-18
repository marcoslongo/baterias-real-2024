"use client";
import React, { useState, useEffect } from 'react';
import { DownloadFile } from "@/components/DownloadFile";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MidiaNode, MidiasResponse } from '@/@types/Midias';
import { BsLightningFill } from 'react-icons/bs';
import { getMidiasStory } from '@/app/api/getStory';

export default function DisplayStories() {
  const [stories, setStories] = useState<MidiaNode[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    loadMoreStories();
  }, []);

  async function loadMoreStories(cursor: string | null = null) {
    if (loading) return;

    setLoading(true);

    try {
      const { edges, pageInfo }: MidiasResponse = await getMidiasStory(cursor);

      setStories(prevStories => {
        const newStories = [...prevStories, ...edges.map(edge => edge.node)];
        return Array.from(new Set(newStories.map(story => story.id))).map(id => newStories.find(story => story.id === id)!);
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
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mb-8">
            {stories.map((story) => (
              (story.camposMidias.adicionarMidia === 'Story') && (
                <div key={story.id}>
                  <figure className="relative w-full h-[800px]">
                    <Image
                      src={story.camposMidias.imagemStory.node.mediaItemUrl}
                      alt={story.camposMidias.imagemStory.node.mediaItemUrl}
                      fill
                      objectFit="cover"
                    />
                  </figure>
                  <div className="flex justify-center mt-4">
                    <DownloadFile url={story.camposMidias.imagemStory.node.mediaItemUrl} />
                  </div>
                </div>
              )
            ))}
          </div>
          {hasNextPage && (
            <div className="flex container justify-center">
              <Button
                className="font-bold h-12 text-base bg-[#DF0209] hover:bg-[#A60004]"
                onClick={() => loadMoreStories(endCursor)}
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
