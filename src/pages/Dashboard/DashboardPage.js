import React, { useEffect, useState } from "react";
import DashboardCard from "./components/DashboardCard";
import DashboardEmpty from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";
import ErrorPage from "../Error/ErrorPage";

const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      async function fetchData() {
        const data = await getUserOrders();
        setOrders(data);
      }
      fetchData();
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  useTitle("Dashboard");

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {errorMessage ? (
          <ErrorPage errorMessage={errorMessage} />
        ) : orders.length > 0 ? (
          orders.map((order) => <DashboardCard key={order.id} order={order} />)
        ) : (
          <DashboardEmpty />
        )}
      </section>
    </main>
  );
};

export default DashboardPage;
