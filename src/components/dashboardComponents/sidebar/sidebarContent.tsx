'use client'

import { UserType } from "@/types/user"
import AccountToggle from "./accountToggle"
import { RouteSelect } from "./routeSelect"
import { useState } from "react"
import { IoClose, IoMenu } from "react-icons/io5"
import { signOut } from "next-auth/react"

export const SidebarContent = ({user}:{user: UserType}) => {
    const [open, setOpen] = useState(false)

    return(
        <>
            <div className={`md:hidden ${open ? 'hidden' : ''} absolute right-4 top-4`}>
                <IoMenu className="size-9" onClick={() => {setOpen(true)}}/>
            </div>
            <div className={`${!open ? 'hidden'  : ''} w-full h-full z-20 absolute bg-stone-100 `}>
                <div className="absolute right-4 top-4">
                    <IoClose className="size-7" onClick={() => {setOpen(false)}}/>
                </div>
                <div className="m-5 mt-16">
                    <RouteSelect setOpen={setOpen}/>
                </div>
                <div className="absolute bottom-2 w-full mr-5 text-destructive">
                    <div className="flex w-full justify-center items-center">
                        <span className="hover:cursor-pointer" onClick={() => signOut()}>SignOut</span>
                    </div>
                </div>
            </div>
            <div className={`md:grid hidden md:sticky md:top-4 md:h-100%`}>
                <AccountToggle user={user}/>
                <RouteSelect />
            </div>
        </>
    )
}