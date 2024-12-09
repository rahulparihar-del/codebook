export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartList: payload.products,
        total: payload.total,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartList: payload.products,
        total: payload.total,
      };
    case "CLEAR":
      return {
        ...state,
        cartList: payload.products,
        total: payload.total,
      };
    default:
      throw new Error("Invalid action type for cart ");
  }
};
