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

    if (target.closest('.table__button_add-img')) {
      const imageId = target.closest('.table__button_add-img').getAttribute("data-pic");      
      const openImage = open('about:blank', '', 'popup');
      openImage.document.title = 'Тестовое изображение';
      openImage.document.body.innerHTML = `<img src="${imageId}">`;
      const screenWidth = screen.width;
      const screenHeight = screen.height;
      const top = (screenHeight - 600) / 2;
      const left = (screenWidth - 600) / 2;
      openImage.resizeTo(600, 600);
      openImage.moveTo(left, top);
    }
  });
};
