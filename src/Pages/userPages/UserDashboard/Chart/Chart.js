import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Tooltip } from 'recharts';
import { fetchProducts } from '../../../../redux/slices/product/productSlice';


const Chart = () => {
    const products = useSelector(state => state.products.products)
    const data = [
        { name: 'Laptop', value: products.filter(product => product.category === 'laptop').length },
        { name: 'Drone', value: products.filter(product => product.category === 'drone').length },
        { name: 'Camera', value: products.filter(product => product.category === 'camera').length }
    ]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </Box>
    );
};

export default Chart;