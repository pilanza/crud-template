'use client'

import { apiUrl } from "@/app/(dashboard)/admin/layout"
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import FormFieldsUser from "./form-fields-user"
import { UserType } from "@/types/user"
import { useState } from "react"
import { queryType } from "@/types/query"

export const DialogCreateUser = ({fetchData}: queryType) => {
    const [open, setOpen] = useState<boolean>()

    const createUser = async (formData: UserType) => {
        await fetch(`${apiUrl}/users`, {
            method: 'POST',
            body: JSON.stringify(formData)
        }).then(res => { 
                if(res.status === 201) {
                    setOpen(false)
                    fetchData()
                }
            }
        )
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
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
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget)
                        const formValues = Object.fromEntries(formData)
                        createUser(formValues)
                    }}
                >
                    <FormFieldsUser/>
                </form>
            </DialogContent>
        </Dialog>
    )
}