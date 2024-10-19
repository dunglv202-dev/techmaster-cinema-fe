export interface Movie {
  id: number
  name: string
  thumbnail: string
  categories: string[]
  durationInMinutes: number
  premiereDate: string
}

export interface DetailMovie {
  id: number
  name: string
  thumbnail: string
  trailer?: string
  description: string
  categories: string[]
  durationInMinutes: number
  director?: string
  actors?: string[]
  liked: boolean
}

export interface MovieFilter {
  category?: string
  nowShowing?: boolean
  comingSoon?: boolean
}
