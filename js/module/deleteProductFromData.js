// Функция принимает id в виде числа, дальше по этому id находим индекс товара в базе и удаляем его
export const deleteProductFromData = (productId, data) => {
  const index = data.findIndex(item => item.id === productId);
  data.splice(index, 1);
};