import { Credentials } from '@/models/auth'
import { login } from '@/services/auth-service'
import { IconLock, IconUser } from '@tabler/icons-react'
import { Button, Checkbox, Divider, Flex, Form, Input, Typography } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm<Credentials>()
  const [submitting, setSubmitting] = useState(false)

  form.submit = async () => {
    try {
      setSubmitting(true)
      await form.validateFields()
      await login(form.getFieldsValue())
      navigate('/me/tickets')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Flex vertical justify='center' style={{ maxWidth: 400, margin: '0 auto' }}>
      <Typography.Title level={2} style={{ margin: 0, fontSize: 18 }}>
        Đăng nhập
      </Typography.Title>
      <Divider />
      <Form form={form} layout='vertical' autoComplete='off'>
        <Form.Item name='username' label='Email/Số điện thoại' rules={[{ required: true }]}>
          <Input prefix={<IconUser size={20} />} />
        </Form.Item>
        <Form.Item name='password' label='Mật khẩu' rules={[{ required: true }]}>
          <Input.Password prefix={<IconLock size={20} />} />
        </Form.Item>
        <Form.Item>
          <Flex justify='space-between'>
            <Form.Item name='remember' valuePropName='checked' noStyle initialValue={true}>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>
            <Link to='#'>
              <Typography.Text style={{ fontWeight: 'bold', color: 'inherit' }}>
                Quên mật khẩu
              </Typography.Text>
            </Link>
          </Flex>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' style={{ width: '100%' }} loading={submitting}>
            Đăng nhập
          </Button>
          <Link to='/register'>
            <Button style={{ width: '100%', marginTop: 20 }}>Đăng ký</Button>
          </Link>
        </Form.Item>
      </Form>
    </Flex>
  )
}

export default Login
