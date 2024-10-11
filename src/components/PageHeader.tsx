import CGVLogo from '@/assets/cgvlogo.png'
import { Menu, MenuProps, Space } from 'antd'
import { Link, useLocation } from 'react-router-dom'

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

const PageHeader = () => {
  const location = useLocation()
  const activeMenu = navItems
    .map((item) => item.path)
    .find((key) => location.pathname.startsWith(key))

  return (
    <header
      style={{
        paddingBlock: 20,
      }}
    >
      <Space>
        <img src={CGVLogo} alt='Logo' />
        <nav>
          <Menu
            mode='horizontal'
            defaultSelectedKeys={activeMenu ? [activeMenu] : ['/dashboard']}
            items={navItems.map(makeMenuItem)}
          />
        </nav>
      </Space>
    </header>
  )
}

export default PageHeader
