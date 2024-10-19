export interface Category {
  id: number
  code: string
  name: string
  thumbnail: string
}

export const CATEGORY_ALL: Category = {
  id: 0,
  code: 'all',
  name: 'Tất cả',
  thumbnail: 'https://www.shutterstock.com/shutterstock/videos/25521776/thumb/1.jpg?ip=x480',
}
