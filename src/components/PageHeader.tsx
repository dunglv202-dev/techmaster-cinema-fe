import CGVLogo from '@/assets/cgvlogo.png'
import { Menu, MenuProps, Space, Typography } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { IconUser } from '@tabler/icons-react'
import styles from './PageHeader.module.css'

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
        maxWidth: 'var(--app-max-width)',
        margin: '0 auto',
      }}
    >
      <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'flex-end' }}>
        <Link to='/login' className={styles['header_link']}>
          <Space>
            <IconUser size={22} style={{ paddingTop: 6 }} />
            <Typography.Text style={{ color: 'inherit' }}>Đăng nhập</Typography.Text>
          </Space>
        </Link>
      </div>
      <Space style={{ columnGap: 40 }}>
        <img src={CGVLogo} alt='Logo' style={{ height: 48 }} />
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
