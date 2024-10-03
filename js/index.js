// 'use strict';
import { initialData } from "./data.js";
import { getPageElements } from "./getPageElements.js";
import { modalBtn } from "./module/modal.js";
import { renderGoods } from "./module/renderGoods.js";
import { totalTablePrice } from "./module/totalTablePrice.js";

const init = () => {
  const elements = getPageElements();
  const data = initialData;
  const output = elements.table;
  totalTablePrice(data);
  renderGoods(output, data);
  modalBtn(elements.addBtn, elements.modalOverlay);

  elements.table.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.table__button_delete')) {
      target.closest('.table__row').remove();
      
      console.log(data);
    }
  });
};

init();
