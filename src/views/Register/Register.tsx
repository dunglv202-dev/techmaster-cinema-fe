import { RegistrationInfo } from '@/models/auth'
import { register } from '@/services/auth-service'
import { IconAt, IconLock, IconUser } from '@tabler/icons-react'
import { Button, Col, DatePicker, Divider, Flex, Form, Input, Row, Typography } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface RegisterForm extends RegistrationInfo {
  rePassword: string
}

const Register = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm<RegisterForm>()
  const [submitting, setSubmitting] = useState(false)

  form.submit = async () => {
    try {
      setSubmitting(true)
      await form.validateFields()
      const formValues = form.getFieldsValue()
      if (formValues.password !== formValues.rePassword) {
        form.setFields([
          {
            name: 'rePassword',
            errors: ['Mật khẩu không khớp'],
          },
        ])
        return
      }
      await register(formValues)
      navigate('/login')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Flex vertical justify='center' style={{ maxWidth: 500, margin: '0 auto' }}>
      <Typography.Title level={2} style={{ margin: 0, fontSize: 18 }}>
        Đăng ký
      </Typography.Title>
      <Divider />
      <Form form={form} layout='vertical' autoComplete='off'>
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item name='lastName' label='Họ đệm'>
              <Input prefix={<IconUser size={18} />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='firstName'
              label='Tên'
              rules={[{ required: true, message: 'Tên không được bỏ trống' }]}
            >
              <Input prefix={<IconUser size={18} />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='phone'
              label='Số điện thoại'
              rules={[{ required: true, message: 'Số điện thoại không được bỏ trống' }]}
            >
              <Input prefix={<IconUser size={18} />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='birthDate'
              label='Ngày sinh'
              rules={[{ required: true, message: 'Ngày sinh không được bỏ trống' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name='email' label='Email'>
              <Input prefix={<IconAt size={16} />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='password'
              label='Mật khẩu'
              rules={[{ required: true, message: 'Mật khẩu không được bỏ trống' }]}
            >
              <Input.Password prefix={<IconLock size={18} />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='rePassword'
              label='Nhập lại mật khẩu'
              rules={[{ required: true, message: 'Yêu cầu nhập lại mật khẩu' }]}
            >
              <Input.Password prefix={<IconLock size={18} />} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                style={{ width: '100%' }}
                loading={submitting}
              >
                Đăng ký
              </Button>
              <Link to='/login'>
                <Button style={{ width: '100%', marginTop: 18 }}>Đăng nhập</Button>
              </Link>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Flex>
  )
}

export default Register
