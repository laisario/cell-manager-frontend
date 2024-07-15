import React from 'react'
import ProductCard from './ProductCard';
import { Container, Typography } from '@mui/material';

function ProductsList({ products }) {
    return (
        <Container>
            {products.length >= 1 ? products?.map((product, index) => <ProductCard product={product} key={index + 1} />) : <Typography variant='h6' textAlign="center">Nenhum celular cadastrado</Typography>}
        </Container>
    )
}

export default ProductsList