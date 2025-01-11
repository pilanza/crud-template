import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png"
import { getServerSession } from "next-auth";

export default async function AccountToggle() {
    const session = await getServerSession()
    const user = session.user

    return (
        <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
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
            </button>
        </div>
    )
}