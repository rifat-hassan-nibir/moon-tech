/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { initialState, proudctReducer } from "../state/productState/productReducer";
import { actionTypes } from "../state/productState/actionTypes";

// eslint-disable-next-line react-refresh/only-export-components
export const Product_Context = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(proudctReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data }))
      .catch(() => dispatch({ type: actionTypes.FETCHING_ERROR }));
  }, []);

  const value = { state, dispatch };

  return <Product_Context.Provider value={value}>{children}</Product_Context.Provider>;
};

export default ProductProvider;
