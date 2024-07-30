import Link from "next/link";

interface CardProps {
	name: string;
	phone: string;
	region: string;
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

export function Card({ name, phone, region }: CardProps) {
	return (
		<li className="flex flex-col bg-white rounded-lg shadow-lg py-3 px-5 border border-slate-200">
			<h3 className="flex items-center gap-1 font-bold text-black">{name}</h3>
			<div>
				<Link href={`tel:+55${phone}`} className="flex items-center gap-1 text-black">
					{formatPhone(phone)}
				</Link>
				<p className="flex items-center gap-1 text-black">
					Região: {region}
				</p>
			</div>
		</li>
	);
}
