import { Box, Card, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { TiLocation } from "react-icons/ti";
import React, { useEffect, useState } from 'react';

const CardsUpcoming = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = process.env.NEXT_PUBLIC_URL;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setGetData(data.events);
                } else {
                    console.error("Failed to fetch.");
                }
            } catch (err) {
                console.error("Error: ", err);
            }
        };
        fetchData();
    }, []);

    const calculateColumns = (numCards) => {
        return 3; // Ensure three cards per row
    };

    return (
        <Box justifyContent="center">
            <SimpleGrid columns={getData.length > 0 ? calculateColumns(getData.length) : 1} spacing={10}>
                {getData.length > 0 && getData.map((event, index) => (
                    <Card key={index} m={2} width="300px">
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            zIndex="-1"
                            style={{
                                backgroundImage: `url(https://lh3.googleusercontent.com/drive-viewer/AKGpihYum0lcpiB0LhfR07-pf1yf4jQ2PYYXRsTxD5CwYB4DQJsn0qU5U6lEMwYJ1xAO5UQgiMpObThdvQP-DqlKbMR0SHh-C1tlUZ8=s1600-v0)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Flex h="100%"></Flex>
                        <Flex direction="column" align="center" justify="center">
                            <Text fontSize="0.8rem" fontWeight={400}>{event.eventName}</Text>
                            <Text fontSize="0.7rem">{event.date}</Text>
                        </Flex>
                        <Flex direction="column" align="center" justify="center">
                            <TiLocation />
                            <Text fontSize="0.8rem">{event.cityName}</Text>
                        </Flex>
                        <Flex direction="column" align="center" justify="center">
                            <Text fontSize="0.8rem">{event.weather}</Text>
                            <Text fontSize="0.8rem">{event.distance} Km</Text>
                        </Flex>
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default CardsUpcoming;
