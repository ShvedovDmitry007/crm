// 'use strict';
import { initialData } from "./data.js";
import { modalControll } from "./module/modalControl.js";
import { modalFormControll } from "./module/modalFormControl.js";
import { renderApp } from "./module/renderApp.js";
import { renderGoods } from "./module/renderGoods.js";
import { tableControls } from "./module/tableControls.js";
import { totalTablePrice } from "./module/totalTablePrice.js";

const init = () => {
  const {
    table,
    addProductBtn,
    modalOverlay,
    modalAddProduct,
    modalForm,
    countInput,
    priceInput,
    newProductTotalPrice,
    discountCheckbox,
    discountInput
  } = renderApp();

  const data = initialData;

  renderGoods(table, data);
  modalControll(addProductBtn, modalOverlay);
  const {modalClose} = modalControll(addProductBtn, modalOverlay);
  // Обработчик кликов по таблице.
  tableControls(data);
  modalFormControll(
    modalForm,
    table,
    modalClose,
    countInput,
    priceInput,
    newProductTotalPrice,
    discountCheckbox,
    discountInput
  );
  totalTablePrice(data);
};

init();
