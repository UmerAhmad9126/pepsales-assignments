import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const LoadingSkeleton = () => {
    return (
        <Stack mt={"50px"} >
            <Skeleton height='100px' width={"80%"} margin={"auto"} />
            <Skeleton height='100px' width={"80%"} margin={"auto"} />
            <Skeleton height='100px' width={"80%"} margin={"auto"} />
            <Skeleton height='100px' width={"80%"} margin={"auto"} />
            <Skeleton height='100px' width={"80%"} margin={"auto"} />
            <Skeleton height='100px' width={"80%"} margin={"auto"} />
        </Stack>
    )
}

export default LoadingSkeleton