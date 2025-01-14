'use client'

import { apiUrl } from "@/app/(dashboard)/admin/layout"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PaginateResponseType } from "@/types/paginate"
import { UserType } from "@/types/user"
import { useEffect, useState } from "react"

export function UserTable() {
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [data, setcurrentData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async (page=0) => {
        const response = await fetch(`${apiUrl}/users?p=${page}`, {
            method:'GET'
        }).then((res) => res.json()) as PaginateResponseType
        
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
                <div className="pt-5">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious 
                                    className="cursor-pointer" 
                                    onClick={() => fetchData(currentPage>0 ? +currentPage-1 : currentPage)}
                                />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext 
                                    className="cursor-pointer" 
                                    onClick={() => fetchData(currentPage<totalPages-1 ? +currentPage+1 : currentPage)}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}