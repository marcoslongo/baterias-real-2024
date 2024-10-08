"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { FaArrowRightLong } from "react-icons/fa6"

const downloads: { title: string; href: string; description: string }[] = [
	{
		title: "Feed",
		href: "/midias/feed",
		description:
			"Posts para o feed do instagram e facebook",
	},
	{
		title: "Stories",
		href: "/midias/story",
		description: "Posts para os stories do instagram, facebook e whatsapp",
	}
]

const contatos: { title: string; href: string; description: string }[] = [
	{
		title: "Fale Conosco",
		href: "/fale-conosco",
		description: "Contate nossa central de atendimento.",
	},
	{
		title: "Trabalhe conosco",
		href: "/trabalhe-conosco",
		description: "Faça parte da nossa equipe.",
	},
	{
		title: "Garantia",
		href: "https://wa.me/+5546988002209",
		description: "Estamos prontos para ajudar! Entre em contato com nosso suporte.",
	}
]

export function Menu() {
	return (
		<NavigationMenu className="hidden lg:flex">
			<NavigationMenuList>
				<NavigationMenuItem className="transition hover:text-[#DF0209] hover:bg-gray-100 px-4 py-2 rounded-md">
					<Link href="/institucional" legacyBehavior passHref>
						Sobre a Real
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="transition hover:text-[#DF0209] hover:bg-gray-100 px-4 py-2 rounded-md">
					<Link href="/representantes" legacyBehavior passHref>
						Representantes
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="bg-transparent">
					<NavigationMenuTrigger className="text-base font-normal hover:text-[#DF0209]">Produtos</NavigationMenuTrigger>
					<NavigationMenuContent className="w-full flex absolute">
						<ul className="flex gap-1 p-6 md:w-[600px] lg:w-[500px] justify-between">
							<li className="w-[40%]">
								<NavigationMenuLink asChild>
									<a
										className="h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:text-[#DF0209] transition"
										href="/bateria-ideal"
									>
										<div className="text-xl mb-2 font-bold">
											Encontre a bateria ideal
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Escolha a bateria ideal para seu carro considerando a capacidade, a compatibilidade, e a tecnologia.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<div className="flex flex-col w-[49%]">
								<ListItem href="/produtos/evolution" title="Linha Evolution" />
								<ListItem href="/produtos/linha-gold" title="Linha Gold" />
								<ListItem href="/produtos/linha-efb" title="Linha EFB" />
								<ListItem href="/produtos/linha-convencional" title="Linha Convencional" />
							</div>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-base font-normal hover:text-[#DF0209]">Downloads</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{downloads.map((item) => (
								<ListItem
									key={item.title}
									title={item.title}
									href={item.href}
								>
									{item.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-base font-normal hover:text-[#DF0209]">Contatos</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid grid-cols-2 p-4 w-[600px]">
							{contatos.map((item) => (
								<ListItem
									key={item.title}
									title={item.title}
									href={item.href}
								>
									{item.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href="/seja-um-revendedor"
						className="flex items-center gap-3 border border-[#DF0209] transition px-4 py-2 rounded-md text-white bg-[#DF0209] hover:text-[#DF0209] hover:bg-transparent"
					>
						Seja um Revendedor <FaArrowRightLong size={16} />
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<a
				ref={ref}
				className={cn(
					"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
					className
				)}
				{...props}
			>
				<div className="text-base leading-none font-bold hover:text-[#DF0209] transition">{title}</div>
				<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
					{children}
				</p>
			</a>
		</li>
	)
})
ListItem.displayName = "ListItem"
