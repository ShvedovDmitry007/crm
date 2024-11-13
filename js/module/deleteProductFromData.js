export const deleteProductFromData = (productId, data) => {
  const index = data.findIndex(item => item.id === productId);
  data.splice(index, 1);
};