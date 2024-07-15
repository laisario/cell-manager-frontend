"use client"
import Header from '@/components/Header'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from '../../api';
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import FormProduct from '@/components/FormProduct';

function ProductDetails() {
    const path = usePathname();
    const id = path?.split('/')[2]
    const [product, setProduct] = useState({});
    const [open, setOpen] = useState(false);
    const router = useRouter()
    useEffect(() => {
        (async () => {
            if (id) {
                const response = await axios.get(`/${id}`)
                setProduct(response?.data)
            }
        })()
    }, [])
    const deleteProduct = async() => { 
        await axios.delete(`/${id}`)
        router.push("/products")
    }
    const { 
        batteryCapacity,
        brandId,
        cameraResolution,
        color,
        connectivity,
        model,
        operatingSystemId,
        physicalDimensions,
        price,
        published,
        ram,
        screenSize,
        storage,
        updated,
        weight,
    } = product;
    return (
        <Container>
            <Header />
            <br />
            <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'self-start' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography component="div" variant="h5">
                            {model}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {brandId}
                        </Typography>
                        <Typography variant="body1">{color}</Typography>
                        <Typography variant="body1">RAM: {ram}</Typography>
                        <Typography variant="body1">Armazenamento: {storage}</Typography>
                        <Typography variant="body1">Bateria: {batteryCapacity}</Typography>
                        <Typography variant="body1">Conectividade: {connectivity}</Typography>
                        <Typography variant="body1">Camera: {cameraResolution}</Typography>
                        <Typography variant="body1">Sistema Operacional: {operatingSystemId}</Typography>
                        <Typography variant="body1">Dimensões físicas: {physicalDimensions}</Typography>
                        <Typography variant="body1">Tamanho tela: {screenSize}</Typography>
                        <Typography variant="body1">Peso: {weight}</Typography>
                        <Typography variant="body1">R$ {price}</Typography>
                        <Typography variant="body1">Publicado: {published}</Typography>
                        {!!updated && <Typography variant="body1">Bateria: {batteryCapacity}</Typography>}
                    </CardContent>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'self-end' }}>
                    <CardActions>
                        <Button startIcon={<EditIcon />} onClick={() => setOpen(true)}>Editar</Button>
                        <Button startIcon={<DeleteIcon />} color="error" onClick={deleteProduct}>Apagar</Button>
                    </CardActions>
                    <CardMedia
                        component="img"
                        sx={{ width: 500 }}
                        image="https://www.compumaq.com.br/loja/img/produtos/0022338.jpg"
                        alt="celular"
                    />
                </Box>
            </Card>
            <FormProduct open={open} handleClose={() => setOpen(false)} update idProduct={id} />
        </Container>
    )
}

export default ProductDetails