import { Movie } from '@/models/movie'
import { Card, Space, Typography } from 'antd'
import MovieCardMeta from './MovieCardMeta'
import { Link } from 'react-router-dom'

interface MovieCardProp {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProp) => {
  return (
    <Card
      cover={
        <Link to={`/movies/${movie.id}`}>
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            src={movie.thumbnail}
            alt={movie.name}
          />
        </Link>
      }
    >
      <Space direction='vertical'>
        <Link to={`/movies/${movie.id}`}>
          <Typography.Text
            style={{ fontWeight: 'bold', fontSize: 16, margin: 0, marginBottom: 10 }}
          >
            {movie.name.toUpperCase()}
          </Typography.Text>
        </Link>
        <MovieCardMeta label='Thể loại' content={movie.categories.join(', ')} />
        <MovieCardMeta label='Thời lượng' content={`${movie.durationInMinutes} phút`} />
      </Space>
    </Card>
  )
}

export default MovieCard
