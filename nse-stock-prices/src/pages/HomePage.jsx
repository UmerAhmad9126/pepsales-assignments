import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStockData } from '../redux/action';
import { Box, SimpleGrid } from '@chakra-ui/react'
import StockCard from '../components/StockCard';
import LoadingSkeleton from '../components/LoadingSkeleton';

const HomePage = () => {

  const dispatch = useDispatch();
  const stockData = useSelector((store) => store.stockReducer.stockData);
  const isLoading = useSelector((store) => store.stockReducer.isLoading);
  console.log('stockData:', stockData);

  useEffect(() => {
    dispatch(getStockData());
  }, [dispatch]);

  return (
    <Box>
      {
        isLoading ? (<LoadingSkeleton />) : (
          <SimpleGrid width={"80%"} height={"auto"} margin={"auto"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={6} mt="50px" columns={{ base: 2, sm: 3, md: 3, lg: 6, xl: 6, "2xl": 6 }}>
            {stockData.data && stockData.data.map((stock) => (
              <StockCard {...stock} key={stock.id} />
            ))}
          </SimpleGrid>
        )
      }


    </Box >
  )
}

export default HomePage