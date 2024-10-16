import { DetailMovie } from '@/models/movie'
import axios from 'axios'

export const getMovieDetails = async (id: string) => {
  return (await axios.get<DetailMovie>(`/api/movies/${id}`)).data
}
