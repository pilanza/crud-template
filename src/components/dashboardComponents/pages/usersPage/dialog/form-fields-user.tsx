import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserType } from "@/types/user"

interface FormFieldsUserProps {
    user?: UserType,
    readOnly?: boolean
}

export default function FormFieldsUser({user, readOnly}: FormFieldsUserProps) {
    return (
        <>
            <div>
                <div className="pb-5">
                    <Label>Username</Label>
                    <Input 
                        name="username"
                        placeholder={user?.username || "Type the username"}
                        type="text"
                        readOnly={readOnly}
                    />
                </div>

                <div className="pb-5">
                    <Label>Email</Label>
                    <Input 
                        name="email"
                        placeholder={user?.email || "Type the email"}
                        type="email"
                        readOnly={readOnly}
                    />
                </div>

                <div className="pb-5">
                    <Label>Password</Label>
                    <Input 
                        name="password"
                        placeholder="Type the password"
                        type="password"
                        readOnly={readOnly}
                    />
                </div>
            </div>
            <DialogFooter>
                <Button variant="outline" type="submit">Save</Button>
            </DialogFooter>
        </>
    )
}