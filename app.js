import { getProducts, wait } from "./functions.js";

const MIN_PRICE = 0;
const MAX_PRICE = 100000;
const COUNTER = 2;

// all products gathered from API
const products = [];

for (let i = MIN_PRICE; i <= MAX_PRICE; i += COUNTER) {
  const data = await getProducts(i);

  data.forEach((product) => {
    // remove duplicates
    if (products.some((item) => item.name === product.name)) {
      return;
    }
    products.push(product);
  });

  // wait 200ms before making next API call
  await wait(200);
}

console.log("🚀 final products:", products);
