import * as React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



import {useDispatch, useSelector} from "react-redux";
import {addOrderAction, changeOrderAction} from "../store/ordersActions";
import {useState} from "react";


function ProductCard(props) {
    const orders = useSelector(state => state.orders.orders)
    const dispatch = useDispatch();

    const [state, setState] = useState(
        {
            open: false,
            vertical: 'bottom',
            horizontal: 'right',
        });
    const { vertical, horizontal, open } = state;

    const product = props.product

    const addToCard = (product) => {
        const findOrder = orders.find(order => order.product_id === product.id)
        const newOrder = {
            product_id: product.id,
            count: 1,
            total_price: product.price,
        }

        if (findOrder) {
            newOrder.count = +findOrder.count + 1
            newOrder.total_price = newOrder.count * product.price;
            dispatch(changeOrderAction(newOrder))

        } else {
            dispatch(addOrderAction(newOrder))

        }
        setState({...state, open: true});
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({...state, open: false});
    };

    return (
        <Card className="product_card" sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="194"
                image={product.img}
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    price {product.price} $
                </Typography>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <IconButton onClick={addToCard.bind(this, product)}>

                    <AddShoppingCartIcon/>
                </IconButton>

            </CardActions>
            <Snackbar anchorOrigin={{vertical, horizontal} } open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Продкут ({product.title}) добавлен в корзину!
                </Alert>
            </Snackbar>
        </Card>
    )
}

export default ProductCard;