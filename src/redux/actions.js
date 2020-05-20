export const ADD_ITEM = "ADD_ITEM";
export const ADD_LIST = "ADD_LIST";
export const DRAG_ITEM = "DRAG_ITEM";

export const add_item = (id, value) => ({ type: ADD_ITEM, id, value });
export const add_list = (value) => ({ type: ADD_LIST, value });
export const drage_item = (payload) => ({ type: DRAG_ITEM, payload });
