import { Movie } from '@/models/movie'
import { Col, Empty, Row } from 'antd'
import MovieCard from './MovieCard'

interface MovieGridProp {
  movies: Movie[]
}

const MovieGrid = ({ movies }: MovieGridProp) => {
  return movies.length > 0 ? (
    <Row gutter={20}>
      {movies.map((movie) => (
        <Col style={{ marginBottom: 20 }} span={6} key={movie.id}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  ) : (
    <Empty imageStyle={{ height: 64 }} />
  )
}

export default MovieGrid
