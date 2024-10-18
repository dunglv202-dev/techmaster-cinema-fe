import { DetailMovie, Movie } from '@/models/movie'
import { ResultPage } from '@/models/pagination'
import axios from 'axios'

export const getMovies = async () => {
  return (await axios.get<ResultPage<Movie>>('/api/movies')).data
}

export const getMovieDetails = async (id: string) => {
  return (await axios.get<DetailMovie>(`/api/movies/${id}`)).data
}
