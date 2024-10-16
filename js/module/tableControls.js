import { deleteProductFromData } from "./deleteProductFromData.js";
import { renderTotalSum } from "./renderTotalSum.js";

//Создаем функцию. Принимает в себя элементы страницы и данные
export const tableControls = ({tableBody, allProductsCost}, data) => {

  // Событие клика вешаем на родителя и дальше проверяем источник клика
  tableBody.addEventListener('click', e => {
    const target = e.target;

    // Если кнопка "Удалить", то ищем айди товара по которому был клик, то есть по какому ряду,
    // так как в нем у нас заранее заготовлен атрибут

    if (target.closest('.table__button_delete')) {
      // Извлекаем айди товара и удаляем его из нашего массива - из data
      // С помощью плюса (+) приводим тип данных к числу, так как изначально это строка,
      // а в наших данных число
      const productId = +target.closest('.table__row').getAttribute("data-id");
      
      // Удаляем ряд с экрана, передаем id товара в функцию удаления из базы
      target.closest('.table__row').remove();

      // Удаляем товар из базы
      deleteProductFromData(productId, data);
      // и пересчитываем общую стоимость;
      renderTotalSum(data, {allProductsCost}); 

      //Проверка данных
      console.log(`data`, data);
    }
  });
};
