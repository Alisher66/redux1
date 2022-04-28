import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProductAction} from "../store/productsActons";
import ProductCard from "./ProductCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Products() {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();
    const [isLoaded, setLoad] = useState(false)
    const url = "https://dummyjson.com/products?limit=20";

    const addProduct = (product) => {
        dispatch(addProductAction(product))
    }

    useEffect(() => {
        if (!isLoaded) {
            setLoad(true);
            fetch(url)
                .then(response => response.json())
                .then(res => {
                    res.products.forEach(product => {
                        const newProduct = {
                            id: product.id,
                            brand: product.brand,
                            category: product.category,
                            price: product.price,
                            img: product.thumbnail,
                            title: product.title,
                        }
                        addProduct(newProduct)
                    })
                })
        }
    },[isLoaded, products])

    return (
        <Container maxWidth="lg">
            <Typography variant="h3" align="center" sx={{mb: "50px", mt: "20px"}}>Продукты</Typography>
            <Box component='div' sx={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                {products.map(product => {
                    return (
                        <ProductCard key={product.id} product={product}/>
                    )
                })}
            </Box>
        </Container>
    )
}

export default Products;