import PageFooter from '@/components/PageFooter/PageFooter'
import PageHeader from '@/components/PageHeader/PageHeader'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
      <PageHeader />
      <main style={{ maxWidth: 'var(--app-max-width)', margin: '20px auto' }}>
        <Outlet />
      </main>
      <PageFooter />
    </>
  )
}

export default DefaultLayout
