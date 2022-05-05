import { Identity } from '@mui/base';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async function(_, {rejectWithValue}) {
        try {
            const resposne = await fetch("https://dummyjson.com/products")

            if(!resposne.ok) {
                throw new Error("Server error!")
            }

            const data = await resposne.json();
            return data.products;

        } catch (error) {
            return rejectWithValue(error.message)
        }
        
    }
)
export const deleteProductById = createAsyncThunk(
    'product/deleteProductById',
    async function(id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE',
              })
             
            if(!response.ok) {
                throw new Error("Can't delete this product, server error")
            }
            dispatch(deleteProduct(id))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    products: [],
    status: null,
    error: null
  }
const productSlice = createSlice({
    name:'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        deleteProduct:(state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = "loading"
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        [deleteProductById.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})

export const {addProduct,deleteProduct} = productSlice.actions
export default productSlice.reducer;