import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={twMerge(' rounded-lg px-2 py-1', className)}
        {...props}
        ref={ref}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
