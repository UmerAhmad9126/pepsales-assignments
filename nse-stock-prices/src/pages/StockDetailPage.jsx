import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const StockDetailPage = () => {
    const { id } = useParams();
    const stockData = useSelector((store) => store.stockReducer.stockData);
    const [stockDetail, setStockDetail] = useState({});

    useEffect(() => {
        const singleStock = stockData.data && stockData.data.find((stock) => stock.id === +id);
        setStockDetail(singleStock);
    }, [id, stockData.data]);

    console.log('stockDetail:', stockDetail);


    return (
        <Box width="100%" height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box>
                <Text>Name:- {stockDetail.name}</Text>
                <Text>Code:- {stockDetail.code}</Text>
                <Text>Least Price:- ${stockDetail.lp}</Text>
                <Text>Change Price:- ${stockDetail.ch}</Text>
                <Text>Change Percent:- {stockDetail.chp}%</Text>
            </Box>
        </Box>
    )
}

export default StockDetailPage