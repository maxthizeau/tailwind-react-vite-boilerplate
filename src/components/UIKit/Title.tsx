import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<unknown>

const Title: React.FC<Props> = ({ children }) => {
  return (
    <>
      <h1 className="text-xl font-bold">{children}</h1>
    </>
  )
}

export default Title
