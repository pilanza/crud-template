'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogDescription, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import FormFieldsUser from "./form-fields-user"

export const DialogCreateUser = () => {
    return (
        <Dialog>
            <DialogTrigger className="border px-3 rounded-md hover:bg-stone-100">
                Create
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Users</DialogTitle>
                    <DialogDescription>
                        Write the informations of the new user and click on save
                    </DialogDescription>
                </DialogHeader>
                <FormFieldsUser/>
                <DialogFooter>
                    <Button>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}