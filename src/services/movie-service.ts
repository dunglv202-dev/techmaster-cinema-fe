import { CATEGORY_ALL } from '@/models/category'
import { DetailMovie, Movie, MovieFilter } from '@/models/movie'
import { ResultPage } from '@/models/pagination'
import axios from 'axios'

export const getMovies = async (criteria?: MovieFilter) => {
  if (criteria?.category === CATEGORY_ALL.code) criteria.category = undefined
  return (
    await axios.get<ResultPage<Movie>>('/api/movies', {
      params: criteria,
    })
  ).data
}

export const getMovieDetails = async (id: string) => {
  return (await axios.get<DetailMovie>(`/api/movies/${id}`)).data
}
