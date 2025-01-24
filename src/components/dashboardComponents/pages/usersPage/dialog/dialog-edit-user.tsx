'use client'

import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import FormFieldsUser from "./form-fields-user"
import { MdModeEdit } from "react-icons/md";
import { UserType } from "@/types/user";
import { useState } from "react";
import { api } from "@/services/api";

interface EditUserProps {
    user: UserType
    fetchData: (page?:number, query?:string) => void
}

export const DialogEditUser = ({user, fetchData}: EditUserProps) => {
    const [open, setOpen] = useState<boolean>()
    
    const editUser = async (formData: UserType) => {
        await api(
            `users/${user.id}`, 
            {
                method: 'PUT',
                body: JSON.stringify(formData)
            }
        ).then(res => { 
            if(res.status === 201) {
                setOpen(false)
                fetchData()
            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="px-2 py-1 border border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 rounded-md mx-2">
                    <MdModeEdit className="size-6 "/>
                </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Users</DialogTitle>
                    <DialogDescription>
                        You&apos;re seeing the information of this user
                    </DialogDescription>
                </DialogHeader>
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget)
                            const formValues = Object.fromEntries(formData)
                            editUser(formValues)
                        }}
                    >
                        <FormFieldsUser user={user}/>
                    </form>
            </DialogContent>
        </Dialog>
    )
}