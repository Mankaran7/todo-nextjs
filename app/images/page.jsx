import React from 'react'
import sunset from '../../assets/sunset.jpeg'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <h1>we will show the image here</h1>
     <Image src={sunset} />
    </div>
  )
}

export default page
