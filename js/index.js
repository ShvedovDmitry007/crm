// 'use strict';
import { initialData } from "./data.js";
import { getPageElements } from "./getPageElements.js";
import { modalBtn } from "./module/modal.js";
import { renderGoods } from "./module/renderGoods.js";
import { tableControls } from "./module/tableControls.js";
import { totalTablePrice } from "./module/totalTablePrice.js";

const init = () => {
  const elements = getPageElements();
  const data = initialData;
  const output = elements.table;
  totalTablePrice(data);
  renderGoods(output, data);
  modalBtn(elements.addBtn, elements.modalOverlay);
  // Обработчик кликов по таблице.
  tableControls(elements, data);
};

init();
