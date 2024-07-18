'use client'
import Link from "next/link";
import { IoDownloadOutline } from "react-icons/io5";


interface DownloadFileProps {
	url: string;
}

export function DownloadFile({ url }: DownloadFileProps) {

	return (
		<Link
			className="bg-[#DF0209] transition hover:bg-[#A60004] text-white flex w-14 h-14 rounded-full justify-center items-center"
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			download
			title="Baixar imagem"
		>
			<IoDownloadOutline size={30} />
		</Link>
	);
}
