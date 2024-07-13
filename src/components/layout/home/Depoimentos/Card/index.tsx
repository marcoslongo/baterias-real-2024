import Image from "next/image";
interface CardProps {
    name: string;
    text: string;
    image: string;
    citystate: string;
    company: string;
}
export function Card({ name, text, image, citystate, company }: CardProps) {
    return (
        <div className="bg-white flex flex-col gap-4 p-8 rounded-3xl shadow-lg my-8 mx-4">
            <div className="flex flex-col gap-4 items-center">
                <Image
                    src={image}
                    alt={name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-[#DF0209]"
                />
                <h2 className="font-bold text-xl">{name}</h2>
            </div>
            <div className="text-center flex flex-col gap-2">
                <p className="italic">"{text}"</p>
                <h3 className="font-semibold">{company} / {citystate}</h3>
            </div>
        </div>
    );
}