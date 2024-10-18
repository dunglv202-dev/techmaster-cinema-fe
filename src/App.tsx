import { ConfigProvider, message } from 'antd'
import { RouterProvider } from 'react-router-dom'
import lightTheme from './themes/Light'
import axios, { AxiosError } from 'axios'
import { router } from './routers'

axios.defaults.baseURL = 'http://localhost:8080'

function App() {
  const [messageApi, contextHolder] = message.useMessage()

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error instanceof AxiosError) {
        messageApi.error(error.response?.data.message || error.message)
      }
      return Promise.reject(error)
    }
  )

  return (
    <ConfigProvider theme={lightTheme}>
      {contextHolder}
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
