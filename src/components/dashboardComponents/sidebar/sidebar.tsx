import React from 'react'
import AccountToggle from './accountToggle'
import { RouteSelect } from './routeSelect'

export const Sidebar = () => {
    return (
        <div>
            <div className='sticky top-4 h-100%'>
                <AccountToggle />
                <RouteSelect />
            </div>
        </div>
    )
}