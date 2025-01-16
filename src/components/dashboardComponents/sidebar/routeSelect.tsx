'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'
import { FiHome, FiUser } from 'react-icons/fi'

const Route = ({ Icon, title, selected, onClick } : {
    selected: boolean,
    Icon: IconType,
    title: string,
    onClick: () => void
}) => {
    return (
        <button 
            className={`flex items-center justtify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_backgroud-color,_color] 
            ${selected
                ? "bg-white text-stone-950 shadow"
                : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
            }`}
            onClick={onClick}
        >
            <Icon />
            <span>{title}</span>
        </button>
    )
}

export const RouteSelect = () => {
    const pathname = usePathname().split('/')[2] ?? '/'
    const [route, setRoute] = React.useState(pathname)
    const router = useRouter()

    const handleClick = (route: string) => {
        setRoute(route)
        router.push(`/admin/${route}`)
    }

    return (
        <div className='space-y-1'>
            <Route Icon={FiHome} selected={route == '/'} title="Dashboard" onClick={() => handleClick("/")}/>
            <Route Icon={FiUser} selected={route == 'users'} title="Users" onClick={() => handleClick("users")}/>
        </div>
    )
}