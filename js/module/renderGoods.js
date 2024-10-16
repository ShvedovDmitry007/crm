import { createRow } from "./builder.js";
import { renderTotalSum } from "./renderTotalSum.js";

export const renderGoods = (elements, data = []) => {
  const output = elements.tableBody;

  data.map(item => {
    output.append(
      createRow({
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        units: item.units,
        count: item.count,
        discont: item.discont,
      })
    );
  });
  renderTotalSum(data, elements);
};