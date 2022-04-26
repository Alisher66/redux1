
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT"

export const addProductAction = (payload) => ({type:ADD_PRODUCT, payload})
export const deleteProductAction = (payload) => ({type:DELETE_PRODUCT, payload})