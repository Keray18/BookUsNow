'use client'

import { Box, Button, Flex, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import { GrMenu } from "react-icons/gr";
import { MdSearch } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons';
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='navbar'>
        <Flex justify="space-around">
        {/* Title */}
           <Box>
              <Heading fontWeight="Bold" color="#CF2D2D">
                BookUsNow
              </Heading>
           </Box>

           {/* Search  */}
           <Box display="flex" alignItems="center" cursor="pointer">
            <Flex px="0.3rem" border="0.5rem solid #3c3c3c" bg="#3c3c3c" textColor="white" borderRadius="0.3rem">
              <Box alignItems="center" px="0.5rem"><GrMenu fontSize="1.1rem" fontWeight="900" /></Box>
              <Box px="0.5rem" fontSize="15px" fontWeight="400">Categories</Box>
            </Flex>
            
            <InputGroup pl="0.8rem" mr="3rem">
              <Input typeof='search' border="none" boxShadow="0rem 0rem 0.2rem 0.05rem" fontSize="15px" textColor="#1e1e1e" borderRadius="0.3rem" w="32vw" h="4.5vh" type='search' placeholder='Search' />
              <InputRightElement pt="0.45rem" pr="0.8rem" cursor="pointer">
                <IoMdSearch color='grey' fontSize="1.3rem" />
              </InputRightElement>
            </InputGroup>

            {/* Sign-in */}
           <Flex textColor="grey" justify="center" alignItems="center">
            <Flex pr="1rem" justify="center" alignItems="center">
              <MdFavorite fontSize="1.3rem" />
              <Box px="0.4rem" fontWeight="400">Favorites</Box>
            </Flex>
            <Button color="grey" p="1rem" h="4.5vh" borderRadius="0.3rem" bgColor="white" border="none" boxShadow="0rem 0rem 0.1rem 0.1rem"  cursor="pointer" colorScheme='teal' variant='outline'>
              <Box fontWeight="Bold">Sign In</Box>
            </Button>
           </Flex>
          </Box>
        </Flex>
    </div>
  )
}

export default Navbar