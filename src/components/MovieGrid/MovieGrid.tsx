import { Movie } from '@/models/movie'
import { Col, Row } from 'antd'
import MovieCard from './MovieCard'

interface MovieGridProp {
  movies: Movie[]
}

const MovieGrid = ({ movies }: MovieGridProp) => {
  return (
    <Row gutter={20}>
      {movies.map((movie) => (
        <Col style={{ marginTop: 20 }} span={6} key={movie.id}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  )
}

export default MovieGrid
