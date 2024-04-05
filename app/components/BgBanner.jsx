'use client'

import React from 'react'
import Banner from '../../public/Banner.svg'
import { Image } from '@chakra-ui/next-js'
import { Box } from '@chakra-ui/react'

const BgBanner = (props) => {
  return (

    <Image 
        src="https://lh3.googleusercontent.com/drive-viewer/AKGpihaV0fAycpHmFwAggb0P3kdHPLC0yMH9KVXQMcjSBxDaptjtH06CnkR-FIyClVFFK8VZ-PILVqbNDe-I1ez-Sz3_TuIg1VQGmw=s1600-rw-v1"
        alt='Image'
        zIndex={-1}
        position= "relative"
        filter= "brightness(0.6)"
        width="100%"
    />

  )
}

export default BgBanner