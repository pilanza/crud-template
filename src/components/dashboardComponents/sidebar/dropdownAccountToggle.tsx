'use client'
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import Image from "next/image";
import Logo from "@/assets/logo.png"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../../ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { UserType } from "@/types/user";

export const DropdownAccountToggle = ({user}:{user: UserType}) => {
    return (
        <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                        <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
                            <Image
                                src={Logo.src}
                                alt="Avatar"
                                width={32}
                                height={32}
                                className="size-8 rounded shrink-0"
                            />
                            <div className="text-start">
                                <span className="text-sm font-bold block">{user.name}</span>
                                <span className="text-xs block text-stone-500">{user.email}</span>
                            </div>

                            <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs text-stone-500"/>
                            <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs text-stone-500"/>
                        </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive" onClick={() => signOut()}>SignOut</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>     
        </div>   
    )
}