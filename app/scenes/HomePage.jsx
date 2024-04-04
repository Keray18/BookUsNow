'use client'

import { Box, Card, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { BsArrowRight } from "react-icons/bs";

import React from 'react'
import Banner from '../../public/Banner.svg';
import CardComponent from '../components/CardComponent';
import { Image } from '@chakra-ui/next-js';

const HomePage = () => {
  return (
    <Box mt="0.3rem">
        <Flex justify="center">
        {/* Background Banner  */}
            <Image 
                src={Banner} 
                alt='Image'
                zIndex={-1}
                position= "relative"
                filter= "brightness(0.6)"

            />
            
            <Flex textColor="white" flexDir="column" position="absolute">
            
            {/* Heading  */}
                <Box mt="5rem" fontSize="40px" >
                    <Heading fontWeight={450}>Discover Exciting Events Happening</Heading>
                    <Heading fontWeight={400}>Near You - Stay Tuned for Updates!</Heading>
                </Box>
                
                {/* Paragraph */}
                <Flex fontSize="17px" flexDir="column" alignItems="center">
                    <Box>amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit,</Box>
                    <Box mt="0.5rem">amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit.</Box>
                </Flex>

                {/* Recommendation */}
                <Flex flexDir="column" mt="4rem">
                    <Flex fontSize="20px" fontWeight="400" alignItems="center">
                        <Text mr="0.5rem">Recommended Shows</Text>
                        <BsArrowRight />
                    </Flex>
                    <CardComponent />
                </Flex>
            </Flex>
        </Flex>
    </Box>
  )
}

export default HomePage