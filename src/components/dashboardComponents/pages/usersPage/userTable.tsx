'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserType } from "@/types/user"
import { useEffect, useState } from "react"
import { DashboardPagination } from "../../pagination/pagination"
import { ResponseType } from "@/types/response"
import { SearchBar } from "../../searchBar/searchBar"
import { DialogCreateUser } from "./dialog/dialog-create-user"
import { DialogShowUser } from "./dialog/dialog-show-user"
import { DialogEditUser } from "./dialog/dialog-edit-user"
import { DialogDeleteUser } from "./dialog/dialog-delete-user"
import { api } from "@/services/api"

export function UserTable() {
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [data, setcurrentData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async (page=0, query="") => {
        const response = await api<UserType>(
            `users?p=${page}&q=${query}`, 
            { method: 'GET' } 
        ).then((res) => res.data) as ResponseType
        
        setTotalPages(response.metadata.totalPages)
        setCurrentPage(response.metadata.currentPage)
        setcurrentData(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className="flex w-full justify-center items-center">
            <div className="w-[90%]">
                <div className="flex mb-5 flex-row">
                    <div className="items-start w-1/2">
                        <SearchBar fetchData={fetchData}/>
                    </div>
                    <div className="flex justify-end w-1/2">
                        <DialogCreateUser fetchData={fetchData} />
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Id</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { !isLoading && data.map((item: UserType) => {
                            return(
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.username}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell className=" whitespace-nowrap">
                                            <DialogShowUser user={item} />
                                            <DialogEditUser user={item} fetchData={fetchData} />
                                            <DialogDeleteUser user={item} fetchData={fetchData}/>  
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <DashboardPagination fetchData={fetchData} totalPages={totalPages} currentPage={currentPage}/>
            </div>
        </div>
    )
}