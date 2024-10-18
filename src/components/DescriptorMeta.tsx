import { Space, Typography } from 'antd'

interface DescriptorMetaProp {
  label: string
  content?: string
  size?: number
}

const DescriptorMeta = ({ label, content, size }: DescriptorMetaProp) => {
  return (
    <Space style={{ display: 'flex' }}>
      <Typography.Text style={{ fontWeight: 'bold', fontSize: size }}>{label}:</Typography.Text>
      <Typography.Paragraph style={{ marginBottom: 0, fontSize: size }}>
        {content}
      </Typography.Paragraph>
    </Space>
  )
}

export default DescriptorMeta
