import { ConfigProvider, message } from 'antd'
import { RouterProvider } from 'react-router-dom'
import lightTheme from './themes/Light'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { router } from './routers'
import { ApiResp } from './models/common'
import { AuthContextProvider } from './context/AuthContext'

const isTokenExpired = (resp: ApiResp<unknown>) => {
  return resp.code === 401 && resp.message === '{jwt.expired}'
}

function App() {
  const [messageApi, contextHolder] = message.useMessage()

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (!(error instanceof AxiosError)) return Promise.reject(error)
      const resp: ApiResp<unknown> = error.response?.data
      if (isTokenExpired(resp)) {
        try {
          // refresh token & try again
          await axios.post('/api/auth/refresh')
          return axios(error.config as AxiosRequestConfig)
        } catch (err) {
          return Promise.reject(err)
        }
      } else if (!error.config?.fetchOptions?.selfErrHandling) {
        messageApi.error(error.response?.data.message || error.message)
      }
      return Promise.reject(error)
    }
  )

  return (
    <ConfigProvider theme={lightTheme}>
      {contextHolder}
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ConfigProvider>
  )
}

export default App
