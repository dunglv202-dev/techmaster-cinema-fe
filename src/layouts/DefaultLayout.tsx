import PageFooter from '@/components/PageFooter'
import PageHeader from '@/components/PageHeader'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
      <PageHeader />
      <main>
        <Outlet />
      </main>
      <PageFooter />
    </>
  )
}

export default DefaultLayout
