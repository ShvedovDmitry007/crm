import { addDataProduct, initialData } from "../data.js";
import { createRow } from "./builder.js";
import { randomId } from "./randomId.js";
import { totalTablePrice } from "./totalTablePrice.js";

export const modalFormControll = (form, table, closeModal, countInput, priceInput, totalCost, checkbox, checkInput) => {

  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      checkInput.disabled = false;
    } else {
      checkInput.disabled = true;
      checkInput.value = '';
    }
  });

  // При вводе цены товара считается полная стоимость и выводится в модальном окне
  form.addEventListener('change', () => {
    totalCost.innerHTML = `${priceInput.value * countInput.value} ₽`;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);
    newProduct.id = +randomId();
    newProduct.count = +form.count.value;
    newProduct.price = +form.price.value;
    console.log('newProduct: ', newProduct);

    table.append(createRow(newProduct));
    addDataProduct(newProduct);
    console.log('Data: ', initialData); 
    form.reset();
    closeModal();
    totalCost.value = '';
    totalTablePrice(initialData);
  });
};