import { getServerSession } from "next-auth";
import { DropdownAccountToggle } from "./dropdownAccountToggle";

export default async function AccountToggle() {
    const session = await getServerSession()
    const user = session.user

    return (
        <DropdownAccountToggle user={user} />
    )
}