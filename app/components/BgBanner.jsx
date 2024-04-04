'use client'

import React from 'react'
import Banner from '../../public/Banner.svg'
import { Image } from '@chakra-ui/next-js'
import { Box } from '@chakra-ui/react'

const BgBanner = (props) => {
  return (

    <Image 
        src={props.banner} 
        alt='Image'
        zIndex={-1}
        position= "relative"
        filter= "brightness(0.6)"
        width={100}
        height={100}

    />

  )
}

export default BgBanner