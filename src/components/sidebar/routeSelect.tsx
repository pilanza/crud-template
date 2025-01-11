import React from 'react'
import { IconType } from 'react-icons'
import { FiHome } from 'react-icons/fi'

const Route = ({ Icon, title, selected } : {
    selected: boolean,
    Icon: IconType,
    title: string
}) => {
    return (
        <button className={`flex items-center justtify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_backgroud-color,_color] 
        ${selected
            ? "bg-white text-stone-950 shadow"
            : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
        }`}>
            <Icon />
            <span>{title}</span>
        </button>
    )
}

export const RouteSelect = () => {
    return (
        <div className='space-y-1'>
            <Route Icon={FiHome} selected={true} title="Dashboard" />
        </div>
    )
}