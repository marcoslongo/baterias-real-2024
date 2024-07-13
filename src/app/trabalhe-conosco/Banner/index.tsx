'use client'
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export function Banner() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<section>
			<div className='container py-14'>
				<div className='grid grid-cols-2 items-center gap-10'>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold text-6xl">Trabalhe conosco</h1>
						<p>Transforme sua carreira na Baterias Real! Valorizamos nossos colaboradores e acreditamos no desenvolvimento pessoal e profissional. Oferecemos um ambiente dinâmico e colaborativo, onde suas ideias são ouvidas e suas contribuições reconhecidas.</p>
					</div>
					<div className='h-[380px]'>
						{isMounted && (
							<ReactPlayer
								controls
								url='https://youtu.be/nAkH_tWrZqs'
								width='100%'
								height='100%'
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
