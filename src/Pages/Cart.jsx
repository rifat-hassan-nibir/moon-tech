import { useContext } from "react";
import { Product_Context } from "../context/ProductProvider";
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useContext(Product_Context);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>No product in the cart</p>;
  }

  if (!loading && !error && cart.length > 0) {
    content = cart.map((product, index) => <CartProductCard product={product} key={index}></CartProductCard>);
  }

  return <div className="grid grid-cols-3 gap-6">{content}</div>;
};

export default Cart;
