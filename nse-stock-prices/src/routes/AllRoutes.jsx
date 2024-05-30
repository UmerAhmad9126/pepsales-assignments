import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage'
import StockDetailPage from '../pages/StockDetailPage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/stock-detail/:id' element={<StockDetailPage />} />
            <Route path='*' element={<h3>404 Page Not Found</h3>} />
        </Routes>
    )
}

export default AllRoutes