import { createRow } from "./builder.js";
import { randomId } from "./randomId.js";
import { renderTotalSum } from "./renderTotalSum.js";
import { setStorage } from "./storageAction.js";

const addToBase = (elements, data) => {
    const formData = new FormData(elements.modalForm);
    const product = Object.fromEntries(formData);
    const newProduct = {
        id: +randomId(),
        title: product.title,
        category: product.category,
        description: product.description,
        units: product.units,
        count: Number(product.count),
        price: Number(product.price),
        discont: product.discont ? Number(product.discont) : false,
    };

    data.push(newProduct);
    elements.tableBody.append(createRow(newProduct));
    setStorage('goods', JSON.stringify(product));
    renderTotalSum(data,elements);
};
export default addToBase;