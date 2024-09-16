export const itemPrice = (productPrice, productDiscont) => {
  let productCost = 0;

  if (productDiscont === false) {
    productCost = productPrice;
  } else if (typeof productDiscont === 'number') {
    const percent = productDiscont / 100;
    productCost = productPrice * (1 - percent);
  }

  return productCost;
};
