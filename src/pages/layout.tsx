import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const RootLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-950 p-12 sm:p-24 md:p-48">
      <div className=" flex h-full  w-full place-content-center place-items-center rounded-lg bg-white p-8 shadow-lg">
        {children}
      </div>
    </div>
  )
}

export default RootLayout
