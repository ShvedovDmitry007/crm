// 'use strict';
// import { initialData } from "./data.js";
import { renderGoods } from "./module/renderGoods.js";
import { tableControls } from "./module/tableControls.js";
import { getPageElements } from './getPageElements.js';
import { overlayControls } from "./module/overlayControls.js";
import { getStorage } from "./module/storageAction.js";

const init = () => {
  const data = getStorage('goods');
  const elements = getPageElements();
  console.log(data);

  renderGoods(elements, data);
  tableControls(elements, data);
  overlayControls(elements,data);
};

init();
