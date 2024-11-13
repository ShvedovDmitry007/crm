import { deleteProductFromData } from "./deleteProductFromData.js";
import { renderTotalSum } from "./renderTotalSum.js";

export const tableControls = ({tableBody, allProductsCost}, data) => {

  tableBody.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.table__button_delete')) {
      const productId = +target.closest('.table__row').getAttribute("data-id");
      
      target.closest('.table__row').remove();
      deleteProductFromData(productId, data);
      renderTotalSum(data, {allProductsCost}); 

      //Проверка данных
      console.log(`data`, data);
    }
  });
};
