import React from "react";
import { ProductCard } from "../../../components";
import { useState } from "react";
import { useEffect } from "react";
import { getFeaturedProduct } from "../../../services";
import ErrorPage from "../../Error/ErrorPage";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const ProductData = async () => {
    try {
      const data = await getFeaturedProduct();
      setProducts(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    ProductData();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {errorMessage ? (
          <ErrorPage errorMessage={errorMessage} />
        ) : (
          <>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
