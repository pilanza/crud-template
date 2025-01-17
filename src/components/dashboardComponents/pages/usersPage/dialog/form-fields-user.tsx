import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserType } from "@/types/user"

interface FormFieldsUserProps {
    user?: UserType,
    readOnly?: boolean
}

export default function FormFieldsUser({user, readOnly}: FormFieldsUserProps) {
    return (
        <form>
            <div className="pb-5">
                <Label>Username</Label>
                <Input 
                    placeholder={user?.username || "Type the username"}
                    type="text"
                />
            </div>

            <div className="pb-5">
                <Label>Email</Label>
                <Input 
                    placeholder={user?.email || "Type the email"}
                    type="email"
                    readOnly={readOnly}
                />
            </div>

            <div>
                <Label>Password</Label>
                <Input 
                    placeholder="Type the password"
                    type="password"
                    readOnly={readOnly}
                />
            </div>
        </form>
    )
}