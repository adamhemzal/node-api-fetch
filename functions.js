// Node 18 has built-in 'fetch'.
// This is for the compatibility reasons even though 'engines' has been defined
import fetch from "node-fetch";

/**
 * Get products from the API call with the minPrice defined.
 * Return array of 1000 products.
 * API: https://api.ecommerce.com/products?minPrice=0
 **/
export const getProducts = async (price) => {
  const res = await fetch(
    `https://api.ecommerce.com/products?minPrice=${price}`
  );

  if (res.ok) {
    const data = await res.json();
    return data.products;
  }

  throw new Error("Something went wrong");
};

/**
 * Wait for a specified number of milliseconds to prevent
 * IP address from being detected and banned.
 **/
export const wait = async (ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};
