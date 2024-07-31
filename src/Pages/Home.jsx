import { useContext } from "react";
import { Product_Context } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Home = () => {
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
    content = products.map((product, index) => <ProductCard product={product} key={index}></ProductCard>);
  }

  return <div className="grid grid-cols-3 gap-6">{content}</div>;
};

export default Home;
