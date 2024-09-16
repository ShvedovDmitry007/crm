// 'use strict';
import { initialData } from "./data.js";
import { getPageElements } from "./getPageElements.js";
import { renderGoods } from "./module/renderGoods.js";
import { totalTablePrice } from "./module/totalTablePrice.js";

const init = () => {
  const elements = getPageElements();
  const data = initialData;
  const output = elements.table;
  totalTablePrice(data);
  renderGoods(output, data);
};

init();
