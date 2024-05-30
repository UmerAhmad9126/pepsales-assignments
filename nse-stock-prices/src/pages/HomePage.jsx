import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStockData } from '../redux/action';
import { Box, Text } from '@chakra-ui/react'
import StockCard from '../components/StockCard';

const HomePage = () => {

  const dispatch = useDispatch();
  const stockData = useSelector((store) => store.stockReducer.stockData);
  console.log('stockData:', stockData);

  useEffect(() => {
    dispatch(getStockData());
  }, [dispatch]);

  return (
    <Box>
      <Box w="100%" h="80px" backgroundColor={"teal"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={"18px"} fontWeight={"bold"} color={"#ffff"}>NSE STOCK PRICES</Text>
      </Box>



      <Box width={"80%"} height={"auto"} margin={"auto"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={6} mt="50px">
        {stockData.data && stockData.data.map((stock) => (
          <StockCard {...stock} key={stock.id} />
        ))}
      </Box>

    </Box >
  )
}

export default HomePage