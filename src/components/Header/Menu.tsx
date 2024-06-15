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
        href: "/docs/primitives/alert-dialog",
        description:
            "Posts para o feed do instagram e facebook",
    },
    {
        title: "Stories",
        href: "/",
        description: "Posts para os stories do instagram, facebook e whatsapp",
    },
    {
        title: "Videos",
        href: "/",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    }
]

const contatos: { title: string; href: string; description: string }[] = [
    {
        title: "Fale Conosco",
        href: "/",
        description: "breve frase",
    },
    {
        title: "Trabalhe conosco",
        href: "/",
        description: "breve frase",
    }
]

export function Menu() {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                <NavigationMenuItem className="transition hover:text-[#DF0209]">
                    <Link href="/institucional" legacyBehavior passHref>
                        Sobre a Real
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="bg-transparent">
                    <NavigationMenuTrigger className="text-base font-normal hover:text-[#DF0209]">Produtos</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full flex">
                        <ul className="flex gap-1 p-6 md:w-[600px] lg:w-[500px] justify-between">
                            <li className="w-[40%]">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/produtos"
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
                                <ListItem href="/linha-evolution" title="Linha Evolution"/>
                                <ListItem href="/linha-gold" title="Linha Gold"/>
                                <ListItem href="/linha-efb" title="Linha EFB"/>
                                <ListItem href="/linha-convencional" title="Linha Convencional"/>
                                <ListItem href="/linha-ecologica" title="Linha Ecológica"/>
                                <ListItem href="/linha-free" title="Linha Free"/>
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
                <NavigationMenuItem className="transition hover:text-[#DF0209]">
                    <Link href="/representantes" legacyBehavior passHref>
                        Representantes
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-normal hover:text-[#DF0209]">Contatos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col w-[200px] gap-3 p-4 md:w-[500px] lg:w-[220px]">
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
                        href="/"
                        className="flex items-center gap-3 border border-[#DF0209] transition px-4 py-2 rounded-md text-[#DF0209] hover:bg-[#DF0209] hover:text-white"
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
