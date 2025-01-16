export interface ResponseType {
    metadata?: {
        totalPages: number
        currentPage: number
    }
    data: object
}