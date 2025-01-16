'use client'

import { apiUrl } from "@/app/(dashboard)/admin/layout"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserType } from "@/types/user"
import { useEffect, useState } from "react"
import { DashboardPagination } from "../../pagination/pagination"
import { ResponseType } from "@/types/response"
import { SearchBar } from "../../searchBar/searchBar"

export function UserTable() {
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [data, setcurrentData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async (page=0, query="") => {
        const response = await fetch(`${apiUrl}/users?p=${page}&q=${query}`, {
            method:'GET'
        }).then((res) => res.json()) as ResponseType
        
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
                <div className="items-start justify-start mb-5">
                    <SearchBar fetchData={fetchData}/>
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