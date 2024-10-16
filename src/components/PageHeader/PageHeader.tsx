import CGVLogo from '@/assets/cgvlogo.png'
import BuyNow from '@/assets/mua_ve_ngay.png'
import { IconTicket, IconUser } from '@tabler/icons-react'
import { Flex, Menu, MenuProps } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import HeaderLink from './HeaderLink'

interface MenuItem {
  path: string
  label: string
  children?: MenuItem[]
}

const navItems: MenuItem[] = [
  {
    path: '/movies',
    label: 'Phim',
    children: [
      {
        path: '/movies/now-showing',
        label: 'Phim đang chiếu',
      },
      {
        path: '/movies/coming-soon',
        label: 'Phim sắp chiếu',
      },
    ],
  },
  {
    path: '/cinemas',
    label: 'Rạp',
  },
  {
    path: '/members',
    label: 'Thành viên',
  },
]

const makeMenuItem = (item: MenuItem): Required<MenuProps>['items'][number] => {
  return {
    key: item.path,
    label: <Link to={item.path}>{item.label}</Link>,
    children: item.children?.map(makeMenuItem),
  }
}

const items = navItems.map(makeMenuItem)

const PageHeader = () => {
  const location = useLocation()
  const activeMenu = navItems
    .map((item) => item.path)
    .find((key) => location.pathname.startsWith(key))

  return (
    <header style={{ maxWidth: 'var(--app-max-width)', margin: '0 auto' }}>
      <Flex justify='flex-end' gap={20} style={{ paddingTop: 20 }}>
        <HeaderLink to='/me/tickets' label='Vé của tôi' icon={<IconTicket size={18} />} />
        <HeaderLink to='/login' label='Đăng nhập' icon={<IconUser size={18} />} />
      </Flex>
      <Flex gap={20} align='center' style={{ paddingBlock: 30 }}>
        <Link to='/'>
          <img src={CGVLogo} alt='logo' style={{ height: 48 }} />
        </Link>
        <nav>
          <Menu items={items} mode='horizontal' activeKey={activeMenu} />
        </nav>
        <div style={{ flexGrow: 1 }}></div>
        <img src={BuyNow} alt='buy now' style={{ height: 56 }} />
      </Flex>
    </header>
  )
}

export default PageHeader
