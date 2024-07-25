import { FaChevronDown } from "react-icons/fa6";

interface MenuMobileProps {
	isOpen: boolean;
}


export function MenuMobile({ isOpen }: MenuMobileProps) {
	return (
		<div
			className={`fixed w-full h-full bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
				}`}
		>
			<nav className="p-8">
				<ul className="flex flex-col gap-3">
					<MenuItem href={"/institucional"} title={"Sobre a Real"} />
					<MenuItem href={"/representantes"} title={"Representantes"} />
					<li className="flex gap-2 items-center">Produtos<FaChevronDown size={12} className="text-[#DF0209]" /></li>
					<ul className="ml-6 flex flex-col gap-2">
						<MenuItem href="/bateria-ideal" title="Bateria ideal" />
						<MenuItem href="/produtos/evolution" title="Linha Evolution" />
						<MenuItem href="/produtos/linha-gold" title="Linha Gold" />
						<MenuItem href="/produtos/linha-efb" title="Linha EFB" />
						<MenuItem href="/produtos/linha-convencional" title="Linha Convencional" />
						<MenuItem href="/produtos/linha-ecologica" title="Linha Ecológica" />
						<MenuItem href="/produtos/linha-free" title="Linha Free" />
					</ul>
					<li className="flex gap-2 items-center">Downloads<FaChevronDown size={12} className="text-[#DF0209]" /></li>
					<ul className="ml-6 flex flex-col gap-2">
						<MenuItem href="/midias/feed" title="Posts para o feed" />
						<MenuItem href="/midias/story" title="Posts para os Storys" />
					</ul>
					<li className="flex gap-2 items-center">Contatos<FaChevronDown size={12} className="text-[#DF0209]" /></li>
					<ul className="ml-6 flex flex-col gap-2">
						<MenuItem href="/fale-conosco" title="Fale conosco" />
						<MenuItem href="/trabalhe-conosco" title="Trabalhe conosco" />
					</ul>
				</ul>
			</nav>
		</div>
	);
}

interface MenuItemProps {
	href: string;
	title: string;
}



function MenuItem({ title, href }: MenuItemProps) {
	return (
		<li>
			<a href={href}>{title}</a>
		</li>
	);
}