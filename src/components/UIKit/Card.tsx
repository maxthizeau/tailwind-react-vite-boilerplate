import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge('bg-white rounded-lg shadow-lg p-8', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
