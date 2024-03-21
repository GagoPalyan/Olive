import { createSlice } from "@reduxjs/toolkit";
import ProductList from "../../utils/ProductList";
import {
  CleanCartReducer,
  addCartReducer,
  changeFilterReducer,
  changeSearchReducer,
  removeCartReducer,
  updateCartReducer,
} from "./productsReducers";

const initialState = {
  list: ProductList,
  filter: "",
  search: "",
  favorites: [],
  cart: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeFilter: changeFilterReducer,
    changeSearch: changeSearchReducer,
    addCart: addCartReducer,
    updateCart: updateCartReducer,
    removeCart: removeCartReducer,
    cleanCart: CleanCartReducer,
  },
  extraReducers: (builder) => {},
});

export const {
  changeFilter,
  changeSearch,
  addCart,
  removeCart,
  updateCart,
  cleanCart,
} = productsSlice.actions;

export const selectProducts = (state) => state.products.list;
export const selectFilter = (state) => state.products.filter;
export const selectSearch = (state) => state.products.search;
export const selectCart = (state) => state.products.cart;

export default productsSlice.reducer;
