import Button from '@/components/UIKit/Button'
import Title from '@/components/UIKit/Title'
import React from 'react'

type Props = unknown

const RoomPage: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <Title>This is the "products" page</Title>
      <div className="flex gap-4">
        <Button asLink href="/" variant="secondary">
          Go back to the root page
        </Button>
        <Button asLink href="/products/1">
          Cool, take me to the product with id "1" !
        </Button>
      </div>
    </div>
  )
}

export default RoomPage
