import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { useRouter } from 'next/router';

function ProductCard({ product }) {
    const {
        brandId,
        color,
        id,
        model,
        price,
        ram,
        storage,
    } = product;
    const router = useRouter()
    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {model}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {brandId} - {ram} - {storage}
                    </Typography>
                    <Typography variant="body1">{color}</Typography>
                    <Typography variant="body1">R$ {price}</Typography>
                  
                </CardContent>
                <CardActions>
                    <Button onClick={() => router.push(`/products/${id}`)}>Ver mais informações</Button>
                </CardActions>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://www.compumaq.com.br/loja/img/produtos/0022338.jpg"
                alt={`celular ${model} ${brandId}`}
            />
        </Card>
    );
}

export default ProductCard