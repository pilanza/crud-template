export interface PaginationType {
    fetchData: (page: number) => void
    totalPages: number
    currentPage: number
}