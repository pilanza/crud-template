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
                    <Label required={!user}>Username</Label>
                    <Input 
                        name="username"
                        placeholder={"Type the username"}
                        defaultValue={user?.username || ''}
                        type="text"
                        readOnly={readOnly}
                        required
                    />
                </div>

                <div className="pb-5">
                    <Label required={!user}>Email</Label>
                    <Input 
                        name="email"
                        placeholder={"Type the email"}
                        defaultValue={user?.email || ''}
                        type="email"
                        readOnly={readOnly}
                        required
                    />
                </div>

                {!readOnly && (
                    <div className="pb-5">
                        <Label required={!user}>Password</Label>
                        <Input 
                            name="password"
                            placeholder="Type the password"
                            type="password"
                            readOnly={readOnly}
                        />
                    </div>
                )}
            </div>
            {!readOnly && (
                <DialogFooter>
                    <Button variant="outline" type="submit">Save</Button>
                </DialogFooter>
            )}
        </>
    )
}