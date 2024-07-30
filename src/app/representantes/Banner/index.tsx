import Image from "next/image";


export function Banner() {
	return (
		<div className="relative w-full min-h-[525px] mb-10 flex items-center">
			<div className="container relative z-20">
				<div className="w-full md:w-1/3 flex flex-col gap-4">
					<h1 className="font-bold text-4xl md:text-6xl">Representantes</h1>
					<p className="text-base md:text-xl">
						Confira nosso mapa de atuação, encontre o representante mais próximo de você e tenha nossos produtos em sua loja.
					</p>
				</div>
			</div>
			<Image
				src={'/assets/images/representantes.webp'}
				fill
				objectFit="cover"
				alt="banner contato"
				priority
			/>
		</div>
	);
}
