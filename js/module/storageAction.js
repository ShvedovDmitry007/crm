// export const getStorage = key => {
//   const product = localStorage.getItem(key);
//   return tasks ? JSON.parse(product) : [];
// };

export const getStorage = key => {
  if (localStorage.getItem(key) === null) {
    return [];
  } else {
    return JSON.stringify(localStorage.getItem(key));
  }
};

// export const setStorage = (product) => {
//   localStorage.setItem('goods', JSON.stringify(product))
// };

export const setStorage = (key, product) => {
  const data = getStorage(key);

  localStorage.setItem(key, product);
  data.push(JSON.parse(localStorage.getItem(key)));
  localStorage.setItem(key, JSON.stringify(data));
};




// export const removeStorage = id => {
//   const data = getStorage('goods');
  
//   data.forEach((product, index) => {
//     if (product.id === id) {
//       data.splice(index, 1);
//       localStorage.setItem('goods', JSON.stringify(data));
//     }
//   });
// };
