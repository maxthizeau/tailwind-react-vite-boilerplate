import React from 'react'
import { useParams } from 'react-router-dom'

type Props = unknown

const Page: React.FC<Props> = () => {
  const params = useParams()
  return <>This is a Product by Id page (id: {params.id ?? 'Undefined'})</>
}

export default Page
