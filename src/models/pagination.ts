export interface Pagination {
  page?: number
  limit: number
}

export interface ResultPage<T> {
  totalPages: number
  totalElements: number
  content: T[]
}
