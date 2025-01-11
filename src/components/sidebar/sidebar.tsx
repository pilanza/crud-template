import React from 'react'
import AccountToggle from './accountToggle'
import { RouteSelect } from './routeSelect'

export const Sidebar = () => {
    return (
        <div>
            <div className='sticky top-4 h-[calc(100vh-32px-48px)]'>
                <AccountToggle />
                <RouteSelect />
            </div>
        </div>
    )
}