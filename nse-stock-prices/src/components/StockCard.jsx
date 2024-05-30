import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const StockCard = ({ name, lp, id }) => {
    return (
        <Link to={`/stock-detail/${id}`}>
            <Box bg="linear-gradient(135deg, #f6d365 0%, #fda085 100%)" borderRadius={"5px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} height={"80px"}>
                <Text>Name:- {name}</Text>
                <Text>Least Price:- ${lp}</Text>
            </Box>
        </Link>
    )
}

export default StockCard