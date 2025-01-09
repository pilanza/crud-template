import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function Home() {
    const session = await getServerSession(authOptions)

    return (
        <main>
            <div>Hello World fasfasfsa f asfasdfafs</div>
            <pre>{JSON.stringify(session)}</pre>
        </main>
    )
}