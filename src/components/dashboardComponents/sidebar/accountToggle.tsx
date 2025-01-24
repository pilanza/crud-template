import { DropdownAccountToggle } from "./dropdownAccountToggle";
import { UserType } from "@/types/user";

export default function AccountToggle({user}:{user: UserType}) {
    return (
        <DropdownAccountToggle user={user} />
    )
}