import * as React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useDispatch, useSelector} from "react-redux";
import {addOrderAction} from "../store/ordersActions";
import {useEffect} from "react";



function ProductCard(props) {

    const dispatch = useDispatch();

    const product = props.product
    const addToCard = (product) => {
        const newOrder = {
            product_id:product.id,
            count:1,
            total_price: product.price,
        }
        dispatch(addOrderAction(newOrder))
    }

    return (
        <Card className="product_card" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image={product.img}
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"  >
                    {product.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    price {product.price} $
                </Typography>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton onClick={() => {addToCard(product)}}>
                    <AddShoppingCartIcon />
                </IconButton>

            </CardActions>

        </Card>
    )
}

export default ProductCard;