'use client'

import {Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import CardsUpcoming from '../components/CardsUpcoming'

const Upcoming = () => {
  return (
    <Box>
      <Flex justify="space-around" alignItems="center" fontSize="20px" fontWeight="400">
        <Flex alignItems="center" mt="15rem" mr="5rem">
            <Text mr="0.5rem">Upcoming Events                                                                                                                               </Text>
            <BsArrowRight />
        </Flex>

        <Text cursor="pointer" fontSize="0.9rem" fontWeight={100} textDecoration="underline"></Text>

        
      </Flex>
      <Flex justify="center" alignItems="center">
        <CardsUpcoming />
      </Flex>
    </Box>
  )
}

export default Upcoming