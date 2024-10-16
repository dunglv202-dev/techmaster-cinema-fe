import MovieGrid from '@/components/MovieGrid/MovieGrid'
import { Movie } from '@/models/movie'

const sampleMovie: Movie = {
  id: 1,
  name: 'Parasite',
  thumbnail:
    'https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg',
  categories: ['Tâm lý', 'Tình cảm'],
  durationInMinutes: 120,
  premiereDate: '2024-10-16',
}

const HomePage = () => {
  return (
    <MovieGrid
      movies={[sampleMovie, sampleMovie, sampleMovie, sampleMovie, sampleMovie, sampleMovie]}
    />
  )
}

export default HomePage
