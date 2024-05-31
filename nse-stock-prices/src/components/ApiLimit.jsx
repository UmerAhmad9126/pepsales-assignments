import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ApiLimit = () => {
    return (
        <Box width="100%" height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box>
                <Text fontSize={"20px"} fontWeight={"bold"}>API Limit has Reached or Some thing Went Wrong Sorry for Inconvinience</Text>
            </Box>
            <Box>
                <Text fontSize={"20px"} fontWeight={"bold"}>Please Try Again Later</Text>
            </Box>
        </Box>
    )
}

export default ApiLimit