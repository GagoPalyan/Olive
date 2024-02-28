export const changeFilterReducer = (state, action) => {
  state.filter = action.payload;
};

export const changeSearchReducer = (state, action) => {
  state.search = action.payload;
};

export const addCartReducer = (state, action) => {
  state.cart.push(action.payload);
};

export const removeCartReducer = (state, action) => {
  state.cart = state.cart.filter((obj) => obj.id !== action.payload);
};
