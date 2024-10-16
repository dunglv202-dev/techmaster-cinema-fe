import { Space, Typography } from 'antd'

interface DescriptorMetaProp {
  label: string
  content?: string
}

const DescriptorMeta = ({ label, content }: DescriptorMetaProp) => {
  return (
    <Space style={{ display: 'flex' }}>
      <Typography.Text style={{ fontWeight: 'bold' }}>{label}:</Typography.Text>
      <Typography.Paragraph style={{ marginBottom: 0 }}>{content}</Typography.Paragraph>
    </Space>
  )
}

export default DescriptorMeta
