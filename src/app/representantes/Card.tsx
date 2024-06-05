import { FaLocationDot, FaPhone } from "react-icons/fa6";

interface CardProps{
    name: string;
    phone: string;
    region: string;
}

export function Card({name,phone,region}:CardProps) {
    return (
        <li className="flex flex-col bg-white rounded-lg shadow-lg py-3 px-5">
            <h3 className="flex items-center gap-1 font-bold">{name}</h3>
            <div>
                <p className="flex items-center gap-1">
                    <FaPhone className="text-[#DF0209]" />{phone}
                </p>
                <p className="flex items-center gap-1">
                    <FaLocationDot className="text-[#DF0209]" />Região: {region}
                </p>
            </div>
        </li>
    );
}