import { Box, Card, CardBody, CardFooter, CardHeader, Flex, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BgBanner from './BgBanner'

const CardComponent = () => {
    const [getData, setGetData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {

                const url = process.env.NEXT_PUBLIC_URL
       
                const response = await fetch(url) 
                if (response.ok) {
                    const data = await response.json()
                    // console.log(data.events);
                    setGetData(data.events)
                    // console.log(getData);
                } else {
                    console.error("Failed to fetch.")
                }
            } catch (err) {
                console.error("Error: ", err)
            }
        }
        fetchData()
    }, [getData])

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    }

    const formatDistance = (distance) => {
        const formattedDistance = Math.round(distance)
    }
    
    return (
        <SimpleGrid textColor="white" spacing={10} minChildWidth="300px">
            {getData.length > 0 && getData.map((event, index) => (
                <Card key={index}>
                    <BgBanner 
                        banner={'https://lh3.googleusercontent.com/drive-viewer/AKGpihaV0fAycpHmFwAggb0P3kdHPLC0yMH9KVXQMcjSBxDaptjtH06CnkR-FIyClVFFK8VZ-PILVqbNDe-I1ez-Sz3_TuIg1VQGmw=s1600-rw-v1'}
                    />
                    <Flex>
                        <CardHeader>
                            <Text>{event.eventName}</Text>
                        </CardHeader>

                        <CardBody>
                            {formatDate(event.date)}
                        </CardBody>
                    </Flex>

                    <Flex>
                        <CardFooter>
                            <HStack>
                                <Box>
                                    {event.cityName}
                                </Box>

                                <Flex>
                                    <Text>{event.weather}</Text>
                                    <Text>{formatDistance(event.distanceKm)}</Text>
                                </Flex>
                            </HStack>
                        </CardFooter>
        
                    </Flex>
                </Card>
            ))}
        </SimpleGrid>
    )
}

export default CardComponent
