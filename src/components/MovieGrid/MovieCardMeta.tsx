import { Space, Typography } from 'antd'

interface MovieCardMetaProp {
  label: string
  content: string
}

const MovieCardMeta = ({ label, content }: MovieCardMetaProp) => {
  return (
    <Space>
      <Typography.Text style={{ fontWeight: 'bold' }}>{label}:</Typography.Text>
      <Typography.Paragraph style={{ marginBottom: 0 }}>{content}</Typography.Paragraph>
    </Space>
  )
}

export default MovieCardMeta
