import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProduct, getProducts} from "../store/productSlice"
import ProductCard from "./ProductCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

function Products() {
    const {products, status, error} = useSelector(state => state.product)
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getProducts())
    },[dispatch])
    
    return (
        <Container maxWidth="lg">
            <Typography variant="h3" align="center" sx={{mb: "50px", mt: "20px"}}>Продукты</Typography>
            <Box component='div' sx={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                {status === 'loading' && <CircularProgress sx={{m:"0 auto"}} />}
                {error &&  <Typography variant="h5" align="center" sx={{mb: "50px", mt: "20px"}}>{error}</Typography>}
                {products?.map(product => {
                    return (
                        <ProductCard key={product.id} product={product}/>
                    )
                })}
            </Box>
        </Container>
    )
}

export default Products;