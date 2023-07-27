import Button from '@/components/UIKit/Button'
import Title from '@/components/UIKit/Title'
import React from 'react'

type Props = unknown

const IndexPage: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <Title>Hi, this is the root page</Title>
      <Button asLink href="/products">
        Go to the "products" page
      </Button>
    </div>
  )
}

export default IndexPage
