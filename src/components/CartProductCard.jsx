/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Product_Context } from "../context/ProductProvider";
import { BiListPlus } from "react-icons/bi";

const CartProductCard = ({ product }) => {
  const { dispatch } = useContext(Product_Context);

  return (
    <div className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900" key={product._id}>
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, index) => {
            return (
              <li className="text-sm" key={index}>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        <button
          onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}
          className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
        >
          Remove From Cart
        </button>
        <button title="Add to wishlist" className="bg-indigo-500  py-1 px-2 rounded-full">
          <BiListPlus className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
