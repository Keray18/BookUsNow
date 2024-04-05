'use client'

import { Box, Card, Center, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { BsArrowRight } from "react-icons/bs";

import React from 'react'
import Banner from '../../public/Banner.svg';
import CardComponent from '../components/CardComponent';
import { Image } from '@chakra-ui/next-js';
import CardCarousel from '../components/CardCarousel';

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
                transform= "scaleX(1.0999)"

            />
            
            <Flex alignItems="center" textColor="white" flexDir="column" position="absolute">
            
            {/* Heading  */}
                <Box mt="5.5rem" fontSize="40px" >
                    <Heading fontWeight={450}>Discover Exciting Events Happening</Heading>
                    <Heading fontWeight={400}>Near You - Stay Tuned for Updates!</Heading>
                </Box>
                
                {/* Paragraph */}
                <Flex fontSize="17px" flexDir="column" alignItems="center">
                    <Box>amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit,</Box>
                    <Box mt="0.5rem">amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit.</Box>
                </Flex>

                {/* Recommendation */}
                <Flex flexDir="column" mt="6.5rem">
                    <Flex justify="space-around" alignItems="center" fontSize="20px" fontWeight="400">
                        <Flex alignItems="center">
                            <Text mr="0.5rem">Recommended Shows</Text>
                            <BsArrowRight />
                        </Flex>

                        <Text cursor="pointer" fontSize="0.9rem" fontWeight={100} textDecoration="underline">See all</Text>

                    </Flex>
                     <Flex justify="end">
                        <SimpleGrid width="80%" textColor="white" minChildWidth="300px">
                            <CardCarousel />
                        </SimpleGrid>
                     </Flex>
                </Flex>
                
            </Flex>
        </Flex>
    </Box>
  )
}

export default HomePage