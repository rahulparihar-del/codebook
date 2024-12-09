import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = ({ data }) => {
  const [paymentId, setPaymentId] = useState(null);

  useEffect(() => {
    // Check if paymentId already exists in localStorage
    const savedPaymentId = localStorage.getItem('paymentId');
    if (savedPaymentId) {
      setPaymentId(savedPaymentId); // Use saved paymentId
    } else {
      // Generate a new paymentId and store it in localStorage
      const newPaymentId = Math.floor(Math.random() * 1000000000);
      setPaymentId(newPaymentId);
      localStorage.setItem('paymentId', newPaymentId);
    }
  }, []); 

  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
      <div className="my-5">
        <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
        <p>Thank you {data.user.name} for the order!</p>
        <p>Your Order ID: {data.id}</p>          
      </div>
      <div className="my-5">
        <p>Your order is confirmed.</p>
        <p>Please check your mail ({data.user.email}) for the eBook.</p>
        <p className="my-5">Payment ID: {paymentId}</p>
      </div>
      <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
        Continue Shopping <i className="ml-2 bi bi-cart"></i>
      </Link>
    </section>
  );
}

export default OrderSuccess;
