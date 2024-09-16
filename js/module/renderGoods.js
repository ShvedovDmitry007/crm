import { createRow } from "./builder.js";
import { itemPrice } from "./itemPrice.js";

export const renderGoods = (output, data = []) => {
  data.map(item => {
    output.append(
      createRow({
        id: item.id,
        title: item.title,
        price: itemPrice(item.price, item.discont),
        category: item.category,
        units: item.units,
        count: item.count,
      })
    );
  });
};