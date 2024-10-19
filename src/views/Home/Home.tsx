import MovieGrid from '@/components/MovieGrid/MovieGrid'
import { Category } from '@/models/category'
import { Movie } from '@/models/movie'
import { getMovies } from '@/services/movie-service'
import { Divider, Spin, Typography } from 'antd'
import { useEffect, useState } from 'react'
import CategoryGrid from './CategoryGrid/CategoryGrid'

const HomePage = () => {
  const [category, setCategory] = useState<Category>()
  const [nowShowing, setNowShowing] = useState<Movie[]>([])
  const [comingSoon, setComingSoon] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      try {
        const nowShowing = await getMovies({
          category: category?.code,
          nowShowing: true,
        })
        setNowShowing(nowShowing.content)

        const comingSoon = await getMovies({
          category: category?.code,
          comingSoon: true,
        })
        setComingSoon(comingSoon.content)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [category])

  return (
    <>
      <section style={{ marginBottom: 30 }}>
        <CategoryGrid onSelect={setCategory} />
      </section>
      <Spin spinning={loading}>
        <section>
          <Divider>
            <Typography.Title level={2} style={{ fontSize: 17, color: 'var(--app-color-primary)' }}>
              Phim đang chiếu
            </Typography.Title>
          </Divider>
          <MovieGrid movies={nowShowing} />
        </section>
        <section>
          <Divider>
            <Typography.Title level={2} style={{ fontSize: 17, color: 'var(--app-color-primary)' }}>
              Phim sắp chiếu
            </Typography.Title>
          </Divider>
          <MovieGrid movies={comingSoon} />
        </section>
      </Spin>
    </>
  )
}

export default HomePage
