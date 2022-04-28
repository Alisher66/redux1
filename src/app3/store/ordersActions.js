export const ADD_ORDER = "ADD_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const CHANGE_ORDER = "CHANGE_ORDER";

export const addOrderAction = (payload) => ({type:ADD_ORDER, payload});
export const deleteOrederAction = (payload) => ({type:DELETE_ORDER, payload});
export const changeOrderAction = (payload) => ({type:CHANGE_ORDER, payload});