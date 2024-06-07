import Image from "next/image";
import { InfoProdutos } from "./InfoProdutos";

interface Props {
    name: string;
    image: string;
}

export function Card({ name, image }: Props) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <h3 className="w-full font-bold text-center mt-3 text-xl">{name}</h3>
            <div className="w-full flex justify-center">
                <Image
                    alt={name}
                    src={image}
                    width={170}
                    height={240}
                />
            </div>
            <div className="flex w-full justify-end">
                <InfoProdutos />
            </div>
        </div>
    );
}