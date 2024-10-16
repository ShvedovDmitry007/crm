//Стоимость конкретного товара в модалке
const productCost = (elements) => {
  const {newProductTotalPrice, priceInput, countInput, discountCheckbox, discountInput} = elements;

  let totalCost = 0;

  totalCost = `${parseInt(priceInput.value) * parseInt(countInput.value)} ₽`;

  if (discountCheckbox.checked === true) {
    totalCost -= totalCost * (parseInt(discountInput.value)) / 100;
  }
  newProductTotalPrice.innerHTML = totalCost ? totalCost : 0;
  return Math.floor(totalCost);

};
export default productCost;