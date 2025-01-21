'use client'

import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { MdDeleteOutline } from "react-icons/md";
import { UserType } from "@/types/user";
import { apiUrl } from "@/app/(dashboard)/admin/layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";

interface DeleteUserProps {
    user: UserType
    fetchData: (page?:number, query?:string) => void
}

export const DialogDeleteUser = ({user, fetchData}: DeleteUserProps) => {
    const [open, setOpen] = useState<boolean>()
    
    const deleteUser = async () => {
        await fetch(`${apiUrl}/users/${user.id}`, {
            method: 'DELETE',
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
                <DialogTrigger className="px-2 py-1 bg-red-600 rounded-md">
                    <MdDeleteOutline className="size-6 text-white"/>
                </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete {user.username}</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this user?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button 
                        onClick={(e) => {
                            e.preventDefault();
                            deleteUser()
                        }}
                        className="bg-red-600"
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}