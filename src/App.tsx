import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import lightTheme from './themes/Light'
import axios from 'axios'
import { router } from './routers'

axios.defaults.baseURL = 'http://localhost:8080'

function App() {
  return (
    <ConfigProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
