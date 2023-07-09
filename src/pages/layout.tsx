import { FC, ReactNode } from "react"

interface IProps {
  children: ReactNode
}

const RootLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-blue-950 flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-white rounded-lg shadow-lg p-8">{children}</div>
    </div>
  )
}

export default RootLayout
