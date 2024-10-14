import { getPageElements } from "../getPageElements.js";

export const renderApp = () => {
  const elements = getPageElements(); 

  return {
    table: elements.tableBody,
    addProductBtn: elements.addProduct,
    modalOverlay: elements.modalOverlay,
    modalAddProduct: elements.modalAddProduct,
    modalForm: elements.modalForm,
    countInput: elements.countInput,
    priceInput: elements.priceInput,
    newProductTotalPrice: elements.newProductTotalPrice,
    discountCheckbox: elements.discountCheckbox,
    discountInput: elements.discountInput,
  };
};