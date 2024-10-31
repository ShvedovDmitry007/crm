import { initialData } from "./data.js";
import { renderGoods } from "./module/renderGoods.js";
import { tableControls } from "./module/tableControls.js";
import { getPageElements } from './getPageElements.js';
import { overlayControls } from "./module/overlayControls.js";

const init = () => {
  const data = initialData;
  const elements = getPageElements();
  console.log(data);

  renderGoods(elements, data);
  tableControls(elements, data);
  overlayControls(elements,data);
};

init();
