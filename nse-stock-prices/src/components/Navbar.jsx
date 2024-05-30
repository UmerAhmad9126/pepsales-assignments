import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Box w="100%" h="80px" backgroundColor={"teal"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Text fontSize={"18px"} fontWeight={"bold"} color={"#ffff"}>NSE STOCK PRICES</Text>
        </Box>)
}

export default Navbar