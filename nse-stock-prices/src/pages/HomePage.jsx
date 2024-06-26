import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStockData } from '../redux/action';
import { Box, SimpleGrid } from '@chakra-ui/react'
import StockCard from '../components/StockCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ApiLimit from '../components/ApiLimit';

const HomePage = () => {

  const dispatch = useDispatch();
  const stockData = useSelector((store) => store.stockReducer.stockData);
  const isLoading = useSelector((store) => store.stockReducer.isLoading);
  const isError = useSelector((store) => store.stockReducer.isError);

  console.log('stockData:', stockData);

  useEffect(() => {
    dispatch(getStockData());
  }, [dispatch]);

  return (
    <Box>
      {
        isLoading ? (<LoadingSkeleton />) : (isError ? (<ApiLimit />) : (
          <SimpleGrid width={"80%"} height={"auto"} margin={"auto"} gap={6} mt="50px" columns={{ base: 1, sm: 1, md: 1, lg: 3, xl: 4, "2xl": 6 }}>
            {stockData.data && stockData.data.map((stock) => {
              return <StockCard {...stock} key={stock.id} />
            })}
          </SimpleGrid>
        ))
      }


    </Box >
  )
}

export default HomePage