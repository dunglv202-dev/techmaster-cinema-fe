import MovieGrid from '@/components/MovieGrid/MovieGrid'
import { Movie } from '@/models/movie'
import { getMovies } from '@/services/movie-service'
import { useEffect, useState } from 'react'

const NowShowing = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      const page = await getMovies({ nowShowing: true })
      setMovies(page.content)
    }
    fetchMovies()
  }, [])

  return <MovieGrid movies={movies} />
}

export default NowShowing
