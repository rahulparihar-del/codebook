import React, { useState } from "react";
import CartCheckout from "./CartCheckout";
import { useCart } from "../../../context";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";

const CartList = () => {
  const [checkout, setCheckout] = useState(false);

  const { cartList, total } = useCart();

  return (
    <>
      <section className="max-w-4xl m-auto">
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <h2 className="text-xl font-semibold">
            Your Cart ({cartList.length})
          </h2>
          {cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}

          <div className="space-y-1 text-right">
            <p>
              Total amount:
              <span className="font-semibold">${total}</span>
            </p>
            <p className="text-sm dark:text-gray-600">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <Link
              to="/products"
              type="button"
              className="px-6 py-2 border rounded-md border-violet-600"
              style={{ border: "1px solid #1C4ED8" }}
            >
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </Link>
            <button
              type="button"
              className="px-6 py-2 border rounded-md  text-white border-violet-600"
              style={{ backgroundColor: "#1C4ED8" }}
            >
              <span
                onClick={() => setCheckout(!checkout)}
                className="sr-only sm:not-sr-only"
              >
                Continue to Checkout
              </span>
            </button>
          </div>
        </div>

        {checkout && <CartCheckout />}
      </section>
    </>
  );
};

export default CartList;
