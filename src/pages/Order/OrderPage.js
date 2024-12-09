import React from "react";
import OrderSuccess from "./components/OrderSuccess";
import Orderfail from "./components/OrderFail";
import { useLocation } from "react-router-dom";
import { useTitle } from '../../hooks/useTitle';

const OrderPage = () => {
  const {state} = useLocation();
  useTitle("Order Summary");

  return <main>{state.status ? <OrderSuccess data={state.data} /> : <Orderfail />}</main>;
};

export default OrderPage;
