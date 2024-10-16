import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface HeaderLinkProp {
  to: string
  label: string
  icon: ReactElement
}

const HeaderLink = ({ to, label, icon }: HeaderLinkProp) => {
  return (
    <Link to={to}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  )
}

export default HeaderLink
