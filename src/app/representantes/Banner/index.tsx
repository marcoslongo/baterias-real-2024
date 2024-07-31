import Image from "next/image";


export function Banner() {
	return (
		<div className="relative w-full min-h-[380px] lg:min-h-[525px] mb-10 flex items-center">
			<div className="container relative z-20">
				<div className="w-full lg:w-1/3 flex flex-col gap-4 text-center lg:text-start">
					<h1 className="font-bold text-4xl lg:text-6xl">Representantes</h1>
					<p className="text-base lg:text-xl">
						Confira nosso <span className="font-bold text-[#DF0209]">mapa de atuação</span>, encontre o representante mais próximo de você e tenha nossos produtos em <span className="font-bold text-[#DF0209]">sua loja</span>.
					</p>
				</div>
			</div>
			<Image
				src={'/assets/images/representantes.webp'}
				fill
				objectFit="cover"
				alt="banner representantes"
				priority
				className="opacity-30 lg:opacity-100"
			/>
		</div>
	);
}
