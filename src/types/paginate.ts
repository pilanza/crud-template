export interface PaginateResponseType {
    metadata?: {
        totalPages: number
        currentPage: number
    }
    data: object
}