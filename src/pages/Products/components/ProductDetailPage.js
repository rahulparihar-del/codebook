import React, { useState, useEffect } from "react";
import Rating from "../../../components/Elements/Rating";
import { useParams } from "react-router-dom";
import { useTitle } from "../../../hooks/useTitle";
import { useCart } from "../../../context";
import ErrorPage from "../../Error/ErrorPage";
import { getProduct } from "../../../services/productService";

const ProductDetailPage = () => {
  const { cartList, removeFromCart, addToCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [product, setProduct] = useState({});
  const { id } = useParams(); // get the id from the url
  useTitle(product.name);

  const ProductData = async () => {
    try {
      const data = await getProduct(id);
      console.log(data);
      setProduct(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    ProductData();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    name,
    overview,
    price,
    rating,
    image_local,
    best_seller,
    in_stock,
    long_description,
  } = product;

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);
    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <main>
      {errorMessage ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <>
          <section>
            <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
              {name}
            </h1>
            <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
              {overview}
            </p>
            <div className="flex flex-wrap justify-around">
              <div className="max-w-xl my-3">
                <img className="rounded" src={image_local} alt={name} />
              </div>
              <div className="max-w-xl my-3">
                <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                  <span className="mr-1">$</span>
                  <span className="">{price}</span>
                </p>
                <p className="my-3">
                  <span>
                    <Rating rating={rating} />
                  </span>
                </p>
                <p className="my-4 select-none">
                  <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                    {best_seller ? "BEST SELLER" : ""}
                  </span>
                  {in_stock && (
                    <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                      IN STOCK
                    </span>
                  )}

                  {!in_stock && (
                    <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                      OUT OF STOCK
                    </span>
                  )}

                  <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                    5 MB
                  </span>
                </p>
                <p className="my-3">
                  {!isInCart && (
                    <button
                      onClick={() => addToCart(product)}
                      disabled={product.in_stock ? "" : "disabled"}
                      className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                        product.in_stock ? "" : "cursor-not-allowed"
                      }`}
                    >
                      Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                    </button>
                  )}
                  {isInCart && (
                    <button
                      onClick={() => removeFromCart(product)}
                      className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                      disabled={product.in_stock ? "" : "disabled"}
                    >
                      Remove Item <i className="ml-1 bi bi-trash3"></i>
                    </button>
                  )}
                </p>
                <p className="text-lg text-gray-900 dark:text-slate-200">
                  {long_description}
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default ProductDetailPage;
