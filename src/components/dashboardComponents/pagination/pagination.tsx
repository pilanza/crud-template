import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext } from "@/components/ui/pagination"
import { PaginationType } from "@/types/pagination"

export const DashboardPagination = ({fetchData, currentPage, totalPages}: PaginationType) => {
    const handlePagination = async (isNextPage: boolean) => {
        if (isNextPage && currentPage<totalPages-1) fetchData(+currentPage+1)
        else if (!isNextPage && currentPage>0) fetchData(+currentPage-1)
        return
    }

    return (
        <div className="pt-5">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious 
                            className="cursor-pointer" 
                            onClick={() => {handlePagination(false)}}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext 
                            className="cursor-pointer" 
                            onClick={() => {handlePagination(true)}}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}