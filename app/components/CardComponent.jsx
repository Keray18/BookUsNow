import { Box, Card, CardBody, CardFooter, Flex, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TiLocation } from "react-icons/ti";
import { WiDegrees } from "react-icons/wi";
import '../globals.css'

const CardComponent = (props) => {
    
    return (

            <Card borderRadius="0.5rem" h="50vh" w="80%" position="relative" overflow="hidden">
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    zIndex="-1"
                    style={{
                        backgroundImage: `url(https://lh3.googleusercontent.com/drive-viewer/AKGpihaV0fAycpHmFwAggb0P3kdHPLC0yMH9KVXQMcjSBxDaptjtH06CnkR-FIyClVFFK8VZ-PILVqbNDe-I1ez-Sz3_TuIg1VQGmw=s1600-rw-v1)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                            // filter: 'blur(5px)',
                        transform: 'scale(1.2)'
                    }}
                />
                
                {/* Just for spacing  */}
                <Flex h="100%"></Flex>

                <Flex>
                    <Flex my="0.2rem" alignItems="center" justify="center">
                        <Text w="40%" mx="1.2rem" fontSize="0.8rem" fontWeight={400}>{props.eventName}</Text>
                        <Text fontSize="0.7rem">{props.date}</Text>
                    </Flex>
                </Flex>

                <Flex alignItems="center" justify="center">
                    <Flex mx="1rem" fontSize="0.8rem" alignItems="center" >
                        <TiLocation />
                        <Text>{props.cityName}</Text>
                                

                    </Flex>
                    <Flex fontSize="0.7rem" alignItems="center">
                        <Text>{props.weather}</Text>
                        <Text mx="0.1rem">|</Text>
                        <Text>{props.distance}</Text>
                        <Text mx="0.1rem">Km</Text>
                    </Flex>
                </Flex>
            </Card>
    )
}

export default CardComponent
