import Image from "next/image";


export function Banner() {
	return (
		<div className="relative w-full min-h-[380px] lg:min-h-[525px] mb-10 flex items-center">
			<div className="container relative z-20">
				<div className="w-full lg:w-1/3 flex flex-col gap-4 text-center lg:text-start">
					<h1 className="font-bold text-4xl lg:text-6xl">Trabalhe conosco</h1>
					<p className="text-base lg:text-xl">
						Transforme sua carreira na <span className="font-bold text-[#DF0209]">Baterias Real</span>! Valorizamos nossos colaboradores e acreditamos no desenvolvimento pessoal e profissional. Oferecemos um ambiente dinâmico e colaborativo, onde suas ideias são ouvidas e suas contribuições reconhecidas.
					</p>
				</div>
			</div>
			<Image
				src={'/assets/images/trabalhe-conosco.webp'}
				fill
				objectFit="cover"
				alt="banner contato"
				priority
				className="opacity-30 lg:opacity-100"
			/>
		</div>
	);
}
