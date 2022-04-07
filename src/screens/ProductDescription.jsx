import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import "./ProductDescription.css";
import { useCart } from "../context/cart-context";

const ProductDescription = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data.product);
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);
  return (
    <div>
      <div className="center heading1"> Product Description</div>
      <Link to="/products" className="btn btn-outline-primary grey-text ml-5">
        Go Back
      </Link>
      <div className="flex-row">
        <div className="product_image">
          <img
            className="img-res"
            src={product?.imageUrl}
            alt={product?.name}
          />
        </div>
        <div className="product_main">
          <p className="title product_title">Title:</p>
          <p className="mt-2">
            {product?.title} {product?.brand}
          </p>
          <hr className="mt-3" />
          <p className="title mt-1">In Stock:</p>
          <p className="mt-2">
            {product?.inStock ? <AiOutlineCheck /> : <FaTimes />}
          </p>
          <hr className="mt-3" />
          <p className="title mt-1">Rating by user:</p>
          <p className="mt-2">{product?.rating} </p> <hr className="mt-3" />
          <p className="title mt-1">Price:</p>
          <p className="mt-2">₹ {product?.price} </p> <hr className="mt-3" />
          {product?.fastDelivery && (
            <h1 className="mt-1 success"> Fast Deliver to your place </h1>
          )}
        </div>
        <div className="cart border">
          <p className="mt-1 ml-1">Price: ₹ {product?.price}</p>
          <hr className="mt-2" />
          {cart.some((p) => p._id === product?._id) ? (
            <button
              className="btn btn-error mt-1 ml-2 mr-2 mb-1"
              onClick={() =>
                cartDispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() =>
                cartDispatch({ type: "ADD_TO_CART", payload: product })
              }
              className="btn btn-dark-grey mt-1 ml-2 mr-2 mb-1"
              disabled={!product?.inStock}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
