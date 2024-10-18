import MovieGrid from '@/components/MovieGrid/MovieGrid'
import { Movie } from '@/models/movie'
import { getMovies } from '@/services/movie-service'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      setMovies((await getMovies()).content)
    }
    fetchMovies()
  }, [])

  return <MovieGrid movies={movies} />
}

export default HomePage
