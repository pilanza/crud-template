'use client'

import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import FormFieldsUser from "./form-fields-user"
import { IoMdInformationCircleOutline } from "react-icons/io";
import { UserType } from "@/types/user";

interface ShowUserProps {
    user: UserType
}

export const DialogShowUser = ({user}: ShowUserProps) => {
    return (
        <Dialog>
                <DialogTrigger className="px-2 py-1 border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 rounded-md">
                    <IoMdInformationCircleOutline className="size-6"/>
                </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Users</DialogTitle>
                    <DialogDescription>
                        You&apos;re seeing the information of this user
                    </DialogDescription>
                </DialogHeader>
                    <FormFieldsUser user={user} readOnly/>
            </DialogContent>
        </Dialog>
    )
}