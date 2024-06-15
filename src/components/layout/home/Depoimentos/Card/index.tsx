import Image from "next/image";
interface CardProps {
    name: string;
    text: string;
    image: string;
    citystate: string;
    company: string;
}
export function Card({name, text, image, citystate, company}:CardProps){
    return(
        <div className="bg-white flex flex-col gap-4 p-8 rounded-3xl shadow-lg my-8 mx-4">
            <div className="flex gap-4 items-center">
                <Image
                    src={image}
                    alt="alt"
                    width={60}
                    height={60}
                    className="rounded-full"
                />
                <h2 className="font-bold text-xl">{name}</h2>
            </div>
            <p>{text}</p>
            <h3 className="italic"> {company} / {citystate}</h3>
        </div>
    );
}