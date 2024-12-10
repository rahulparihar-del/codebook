import React, { useState, useEffect } from "react";
import { ProductCard, ProductCardSkeleton } from "../../components";
import FilterBar from "./components/FilterBar";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";
import { getProductList } from "../../services";
import ErrorPage from "../Error/ErrorPage";

const ProductsList = () => {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("q");
  useTitle("Explore ebooks Collection");
  const { productList, inititalProductList } = useFilter();

  const ProductData = async () => {
    try {
      const data = await getProductList(query);
      inititalProductList(data);
      setLoading(false); // Set loading to false after data is fetched
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  useEffect(() => {
    ProductData();
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({productList.length})
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {errorMessage ? (
            <ErrorPage errorMessage={errorMessage} />
          ) : (
            <>
              {loading ? (
                // Show skeleton loaders while loading
                Array.from({ length: 15 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              ) : (
                // Show actual product cards after data is loaded
                productList.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </>
          )}
        </div>
      </section>
      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};

export default ProductsList;
