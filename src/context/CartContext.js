import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const addToCart = (products) => {
    const updateList = state.cartList.concat(products);
    const updateTotal = state.total + products.price;
    dispatch({
      type: "ADD_ITEM",
      payload: {
        products: updateList,
        total: updateTotal,
      },
    });
  };

  const removeFromCart = (products) => {
    const updateList = state.cartList.filter((item) => item.id !== products.id);
    const updateTotal = state.total - products.price;
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        products: updateList,
        total: updateTotal,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR",
      payload: {
        products: [],
        total: 0,
      },
    });
  };

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
