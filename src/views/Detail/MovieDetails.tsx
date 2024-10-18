import DescriptorMeta from '@/components/DescriptorMeta'
import ScheduleModal from '@/components/ScheduleModal/ScheduleModal'
import { DetailMovie } from '@/models/movie'
import { getMovieDetails } from '@/services/movie-service'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { Button, Divider, Flex, Image, Space, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<DetailMovie>()
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false)

  useEffect(() => {
    if (!id) return
    const fetchMovie = async () => {
      setMovie(await getMovieDetails(id))
    }
    fetchMovie()
  }, [id])

  return (
    <>
      <Space direction='vertical' style={{ gap: 20, width: '100%' }}>
        <Flex align='start' style={{ gap: 30 }}>
          <Image src={movie?.thumbnail} width={200} />
          <Space direction='vertical' style={{ flexGrow: 1 }}>
            <Typography.Title level={2} style={{ margin: 0 }}>
              {movie?.name}
            </Typography.Title>
            <Divider style={{ marginBlock: 0 }} dashed />
            {movie?.director && <DescriptorMeta label='Đạo diễn' content={movie?.director} />}
            {movie?.actors && movie.actors.length > 0 && (
              <DescriptorMeta label='Diễn viên' content={movie?.actors?.join(', ')} />
            )}
            <DescriptorMeta label='Thể loại' content={movie?.categories.join(', ')} />
            <DescriptorMeta label='Thời lượng' content={`${movie?.durationInMinutes} phút`} />
            <Space>
              <Button type='primary' onClick={() => setScheduleModalOpen(true)}>
                Đặt vé
              </Button>
              <Button
                icon={!movie?.liked ? <IconHeart size={18} /> : <IconHeartFilled size={18} />}
                danger={movie?.liked}
              />
            </Space>
          </Space>
        </Flex>
        <Typography.Paragraph>{movie?.description}</Typography.Paragraph>
        {movie?.trailer && (
          <iframe
            style={{ width: '100%', border: 'none', height: 500 }}
            src={movie.trailer}
          ></iframe>
        )}
      </Space>
      <ScheduleModal
        movieId={movie?.id}
        visible={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </>
  )
}

export default MovieDetails
