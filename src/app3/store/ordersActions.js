export const ADD_ORDER = "ADD_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";

export const addOrderAction = (payload) => ({type:ADD_ORDER, payload});
export const deleteOrederAction = (payload) => ({type:DELETE_ORDER, payload});