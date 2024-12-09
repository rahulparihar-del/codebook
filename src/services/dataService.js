function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return { token, cbid };
}

export const getUser = async () => {
  const { token, cbid } = getSession();

  const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}s`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};

export const getUserOrders = async () => {
  const { token, cbid } = getSession();

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
};

export const createOrders = async (cartList, total, user) => {
  const { token } = getSession();
  const orderDetails = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderDetails),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders`,
    requestOption
  );

  const data = await response.json();
  return data;
};
