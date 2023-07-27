import React from 'react'
import Button from './UIKit/Button'
import { FallbackProps } from 'react-error-boundary'

interface Props extends FallbackProps {}

const ErrorFallback: React.FC<Props> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="fixed z-50 flex h-screen w-screen items-center justify-center bg-black/80">
      <div className="w-128 h-full overflow-y-scroll rounded-lg bg-white p-8 shadow-lg md:max-w-fit">
        <h1 className="text-center text-lg font-bold">
          Something went wrong :
        </h1>
        <pre>{error.message}</pre>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </div>
    </div>
  )
}

export default ErrorFallback
