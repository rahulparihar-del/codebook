import React, { useState, useEffect } from "react";
import { ProductCard, ProductCardSkeleton } from "../../../components";
import { getFeaturedProduct } from "../../../services";
import ErrorPage from "../../Error/ErrorPage";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  const ProductData = async () => {
    try {
      const data = await getFeaturedProduct();
      setProducts(data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false); // Stop loading if there's an error
    }
  };

  useEffect(() => {
    ProductData();
  }, []);

  return (
    <section className="my-20">
      <h1
        className="text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8"
        style={{ fontSize: "1.7rem" }}
      >
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {errorMessage ? (
          <ErrorPage errorMessage={errorMessage} />
        ) : (
          <>
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            ) : (
              // Show the actual product cards after loading
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
