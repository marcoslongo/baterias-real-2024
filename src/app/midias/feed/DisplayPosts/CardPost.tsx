import { DownloadFile } from "@/components/DownloadFile";
import Image from "next/image";

interface CardPostProps {
  image: string;
  linkDownload: string
}

export function CardPost({image, linkDownload}:CardPostProps) {
  return (
    <div>
      <figure className="relative w-full h-[400px]">
        <Image
          src={image}
          alt=''
          fill
          objectFit="cover"
        />
      </figure>
      <div className="flex justify-center mt-4">
        <DownloadFile url={linkDownload} />
      </div>
    </div>
  );
}