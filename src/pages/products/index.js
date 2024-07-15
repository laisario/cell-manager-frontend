import React, { useEffect, useState } from 'react'
import axios from '../../api';
import Header from '@/components/Header';
import ProductsList from '@/components/ProductsList';
import { Box, Button, Container, Typography } from '@mui/material';

function Products() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [resultSearch, setResulSearch] = useState([])
  useEffect(() => {
    (async () => {
      const response = await axios.get("/")
      setProducts(response?.data)
      setResulSearch(response?.data)
    })()
  }, [])


  useEffect(() => {
    const result = products.filter((product) => product.model.toLowerCase().includes((search).toLowerCase()))
    if (!!result.length) {
      setResulSearch(result)
    } else {
      setResulSearch(products)
    }
  }, [search])

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      <br />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Celulares</Typography>
        <Box>
          <Button>Carregar teste</Button>
          <Button>Apagar todos</Button>
        </Box>
      </Box>
      <ProductsList products={resultSearch} />
    </Container>
  )
}

export default Products