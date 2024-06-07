import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,

} from "@/components/ui/alert-dialog"
import { IoIosClose } from "react-icons/io";
import Image from "next/image";



export function InfoProdutos() {
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger className="bg-[#DF0209] text-white py-2 px-3 hover:underline rounded-tl-xl">Ver ficha técnica</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogCancel className="w-10 h-10 p-0 flex items-center justify-center bg-[#DF0209] hover:bg-black text-white absolute right-0"><IoIosClose className="text-white" size={36} /></AlertDialogCancel>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center">56BR D | 56BR E</AlertDialogTitle>
                        <AlertDialogDescription>
                            <div className="flex justify-center py-8 border-b-2 border-[#DF0209]">
                                <Image
                                    src={'/assets/images/bateria-free.png'}
                                    alt=""
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <ul className="flex flex-col gap-3 mt-8">
                                <ItemInfoProd
                                    image={"/assets/images/ico-bateria.svg"}
                                    title={"Capacidade:"}
                                    response={"35ah"}
                                />
                                <ItemInfoProd
                                    image={"/assets/images/ico-peso.svg"}
                                    title={"Peso:"}
                                    response={"35ah"}
                                />
                                <ItemInfoProd
                                    image={"/assets/images/ico-raio.svg"}
                                    title={"Tensão Nominal:"}
                                    response={"12v"}
                                />
                                <ItemInfoProd
                                    image={"/assets/images/ico-tempo.svg"}
                                    title={"Res. de Capacidade:"}
                                    response={"35 Minutos"}
                                />
                                <ItemInfoProd
                                    image={"/assets/images/ico-injecao.svg"}
                                    title={"Corrente de Partida:"}
                                    response={"35 Minutos"}
                                />
                            </ul>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
interface ItemInfoProdProps {
    image: string;
    title: string;
    response: string;
}

function ItemInfoProd({ title, image, response }: ItemInfoProdProps) {
    return (
        <li className="flex items-center text-black gap-2 text-lg">
            <Image src={image} alt="" width={26} height={26} />
            {title} <span className="text-[#DF0209]">{response}</span>
        </li>
    );
}