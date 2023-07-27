import Title from '@/components/UIKit/Title'
import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className=" bg-sky-200">
      <Title>This is displayed by the layout in "products"</Title>
      {children}
    </div>
  )
}

export default Layout
