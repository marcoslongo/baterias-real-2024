import Image from "next/image";
interface CardProps {
	name: string;
	text: string;
	image: string;
	time: string;
	sector: string
}
export function Card({ name, text, image, time, sector }: CardProps) {
	return (
		<div className="bg-white flex flex-col gap-4 p-8 rounded-3xl shadow-lg my-8 mx-4">
			<div className="flex gap-4 items-center">
				<Image
					src={image}
					alt={name}
					width={120}
					height={120}
					className="rounded-full border-4 border-[#DF0209]"
				/>
				<div className="flex flex-col">
					<h2 className="font-bold text-xl">{name}</h2>
					<p className="font-semibold">{time}</p>
					<p className="font-semibold">{sector}</p>
				</div>
			</div>
			<p className="italic">&quot;{text}&quot;</p>
		</div>
	);
}