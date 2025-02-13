import { Movie } from '@/models/movie'
import { Card, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import DescriptorMeta from '../DescriptorMeta'

interface MovieCardProp {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProp) => {
  return (
    <Card
      styles={{
        body: {
          paddingBlock: 15,
          paddingInline: 20,
        },
      }}
      cover={
        <Link to={`/movies/${movie.id}`}>
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: 220 }}
            src={movie.thumbnail}
            alt={movie.name}
          />
        </Link>
      }
    >
      <Space direction='vertical'>
        <Link to={`/movies/${movie.id}`}>
          <Typography.Text
            style={{ fontWeight: 'bold', fontSize: 14, margin: 0, marginBottom: 10 }}
          >
            {movie.name.toUpperCase()}
          </Typography.Text>
        </Link>
        <DescriptorMeta size={13} label='Thể loại' content={movie.categories.join(', ')} />
        <DescriptorMeta size={13} label='Thời lượng' content={`${movie.durationInMinutes} phút`} />
      </Space>
    </Card>
  )
}

export default MovieCard
