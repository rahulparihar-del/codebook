import React from "react";
import { Link } from "react-router-dom";
// import Book from "../../../assets/book.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5">
        <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
        <p className="text-custom-1.3 my-7 px-1 dark:text-slate-300 w-10/12	">
          CodeBook is the world's most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore eBooks
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img
         style={{ width: "1500px", height: "auto" }} 
          className="rounded-lg max-h-full w-full h-auto"
          src="https://camo.githubusercontent.com/3c2e62f9b7a86e66db73414c7db7e1fa1016d50568f00060bbd729d1c6a55eec/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f7167515567674143335066763638377150432f67697068792e6769663f6369643d656366303565343739656e64666d75727164766c6e726c6d6c746731333278317373656f637636786569743878686a382665703d76315f676966735f736561726368267269643d67697068792e6769662663743d67"
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};

export default Hero;
