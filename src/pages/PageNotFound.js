import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <section
        className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800"
      >
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2
              className="mb-8 font-extrabold text-9xl dark:text-gray-400"
              style={{ color: "#2C2E35" }}
            >
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl dark: text-black ">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8  dark:text-white">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold bg-blue-600 text-white rounded dark:bg-blue-600 dark:text-gray-50"
              style={{ backgroundColor: "#2C2E35" }}
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
