import Link from "next/link";
import Image from "next/image";

interface CardProps {
	name: string;
	phone: string;
	region: string;
	photo: string;
}

function formatPhone(phone: string): string {
	const cleaned = phone.replace(/\D/g, '');
	if (cleaned.length === 11) {
		return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
	} else if (cleaned.length === 10) {
		return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
	} else {
		return phone;
	}
}

export function Card({ name, phone, region, photo }: CardProps) {
	return (
		<li className="flex gap-4 items-center bg-white rounded-lg shadow-lg py-3 px-5 border border-slate-200 text-base">
			<Image
				src={photo}
				width={100}
				height={100}
				alt={name}
				className="rounded-full border-4 border-[#DF0209]"
			/>
			<div className="flex flex-col">
				<h3 className="flex items-center gap-1 font-bold text-black">{name}</h3>
				<div>
					<Link href={`tel:+55${phone}`} className="flex items-center gap-1 text-black hover:underline">
						{formatPhone(phone)}
					</Link>
					<p className="flex items-center gap-1 text-black">
						Região: {region}
					</p>
				</div>
			</div>
		</li>
	);
}
