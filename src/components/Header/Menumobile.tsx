import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong, FaChevronDown } from "react-icons/fa6";

interface MenuMobileProps {
	isOpen: boolean;
	handleCloseMenu: () => void;
}

export function MenuMobile({ isOpen, handleCloseMenu }: MenuMobileProps) {
	const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({
		produtos: false,
		downloads: false,
		contatos: false,
	});

	const toggleSubmenu = (menu: string) => {
		setOpenSubMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
	};

	return (
		<div
			className={`fixed w-full h-full bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
		>
			<nav className="p-8">
				<ul className="flex flex-col gap-3">
					<MenuItem href={"/institucional"} title={"Sobre a Real"} handleCloseMenu={handleCloseMenu} />
					<MenuItem href={"/representantes"} title={"Representantes"} handleCloseMenu={handleCloseMenu} />

					<li onClick={() => toggleSubmenu("produtos")} className='flex gap-2 items-center cursor-pointer'>
						Produtos
						<FaChevronDown size={12} className={`text-[#DF0209] transition  ${openSubMenus.produtos && 'rotate-180'}`} />
					</li>
					{openSubMenus.produtos && (
						<ul className="ml-6 flex flex-col gap-2">
							<MenuItem href="/bateria-ideal" title="Bateria ideal" handleCloseMenu={handleCloseMenu} />
							<MenuItem href="/produtos/evolution" title="Linha Evolution" handleCloseMenu={handleCloseMenu} />
							<MenuItem href="/produtos/linha-gold" title="Linha Gold" handleCloseMenu={handleCloseMenu} />
							<MenuItem href="/produtos/linha-efb" title="Linha EFB" handleCloseMenu={handleCloseMenu} />
							<MenuItem href="/produtos/linha-convencional" title="Linha Convencional" handleCloseMenu={handleCloseMenu} />
							<MenuItem href="/produtos/linha-ecologica" title="Linha Ecológica" handleCloseMenu={handleCloseMenu} />
							<MenuItem href="/produtos/linha-free" title="Linha Free" handleCloseMenu={handleCloseMenu} />
						</ul>
					)}

					<li onClick={() => toggleSubmenu("downloads")} className="flex gap-2 items-center cursor-pointer">
						Downloads
						<FaChevronDown size={12} className={`text-[#DF0209] transition  ${openSubMenus.downloads && 'rotate-180'}`} />
					</li>
					{openSubMenus.downloads && (
						<ul className="ml-6 flex flex-col gap-2">
							<MenuItem href="/midias/feed" title="Posts para o feed" handleCloseMenu={handleCloseMenu} />
							<MenuItem href="/midias/story" title="Posts para os Storys" handleCloseMenu={handleCloseMenu} />
						</ul>
					)}

					<li onClick={() => toggleSubmenu("contatos")} className="flex gap-2 items-center cursor-pointer">
						Contatos
						<FaChevronDown size={12} className={`text-[#DF0209] transition  ${openSubMenus.contatos && 'rotate-180'}`} />
					</li>
					{openSubMenus.contatos && (
						<ul className="ml-6 flex flex-col gap-2">
							<MenuItem href="/fale-conosco" title="Fale conosco" handleCloseMenu={handleCloseMenu} />
							<MenuItem href="/trabalhe-conosco" title="Trabalhe conosco" handleCloseMenu={handleCloseMenu} />
						</ul>
					)}
					<li className="w-[230px]">
						<Link
							href="/seja-um-revendedor"
							className="flex items-center gap-3 border border-[#DF0209] transition px-4 py-2 rounded-md text-[#DF0209] hover:bg-[#DF0209] hover:text-white"
							onClick={handleCloseMenu}
						>
							Seja um Revendedor <FaArrowRightLong size={16} />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

interface MenuItemProps {
	href: string;
	title: string;
	handleCloseMenu: () => void;
}

function MenuItem({ title, href, handleCloseMenu }: MenuItemProps) {
	return (
		<li>
			<Link href={href} onClick={handleCloseMenu}>
				{title}
			</Link>
		</li>
	);
}
