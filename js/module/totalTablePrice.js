import { itemPrice } from "./itemPrice.js";

export const totalTablePrice = (obj) => {
  const total = obj.reduce((acc, item) => {
    return acc + itemPrice(item.price, item.discont) * item.count;
  }, 0);

  const totalPrice = document.querySelector('.header__cost');
  totalPrice.innerHTML = `${total} ₽`;
  
  return total;
};
