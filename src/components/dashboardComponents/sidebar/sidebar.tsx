import { getServerSession } from 'next-auth'
import { SidebarContent } from './sidebarContent'

export const Sidebar = async () => {
        const session = await getServerSession()
        const user = session.user
        return (
        <div>
           <SidebarContent user={user}/>
        </div>
    )
}