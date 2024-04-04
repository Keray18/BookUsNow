import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import React from 'react'

const SecondNav = () => {
  return (
    <Flex justify="space-around" textColor="grey" fontWeight="400">

        {/* Location */}
        <Flex alignItems="center">
            <TiLocation fontSize="1.5rem" />
            <Box mx="0.3rem">Mumbai, India</Box> 
            <MdKeyboardArrowRight />
        </Flex>

        {/* Navigation */}
        <Flex alignItems="center">
            <Text mx="1rem">Live Shows</Text>
            <Text mx="1rem">Streams</Text>
            <Text mx="1rem">Movies</Text>
            <Text mx="1rem">Plays</Text>
            <Text mx="1rem">Events</Text>
            <Text mx="1rem">Sports</Text>
            <Text mx="1rem">Activities</Text>
        </Flex>

        {/* No use just for spacing purposes */}
        <Flex>
            <Button display="none">Play</Button>
        </Flex>
    </Flex>
  )
}

export default SecondNav