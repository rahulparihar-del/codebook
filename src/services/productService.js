export const getProductList = async (query) => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products?name_like=${query ? query : ""}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

export const getFeaturedProduct = async () => {
  const response = await fetch(`${process.env.REACT_APP_HOST}/444/feature_products`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};
