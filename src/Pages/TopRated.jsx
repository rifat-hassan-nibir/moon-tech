import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { Product_Context } from "../context/ProductProvider";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useContext(Product_Context);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length > 0) {
    content = products
      .filter((product) => product.rating >= 4)
      .map((product, index) => <ProductCard product={product} key={index}></ProductCard>);
  }

  return <div className="grid grid-cols-3 gap-6">{content}</div>;
};

export default TopRated;
