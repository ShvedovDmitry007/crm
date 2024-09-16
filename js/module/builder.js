export const createRow = ({id, title, price, category, units, count}) => {
  const row = document.createElement('tr');
  row.classList.add('table__row');
  row.setAttribute('data-id', id);

  const cellId = document.createElement('td');
  cellId.classList.add('table__cell', 'table__cell_id');
  cellId.innerHTML = id;

  const cellTitle = document.createElement('td');
  cellTitle.classList.add('table__cell', 'table__cell_title');
  cellTitle.innerHTML = title;

  const cellCategory = document.createElement('td');
  cellCategory.classList.add('table__cell', 'table__cell_category');
  cellCategory.innerHTML = category;

  const cellUnits = document.createElement('td');
  cellUnits.classList.add('table__cell', 'table__cell_units');
  cellUnits.innerHTML = units;

  const cellCount = document.createElement('td');
  cellCount.classList.add('table__cell', 'table__cell_count');
  cellCount.innerHTML = count;

  const cellPrice = document.createElement('td');
  cellPrice.classList.add('table__cell', 'table__cell_price');
  cellPrice.innerHTML = `${price} ₽`;

  const cellTotalPrice = document.createElement('td');
  cellTotalPrice.classList.add('table__cell', 'table__cell_total-price');
  cellTotalPrice.innerHTML = `${count * price} ₽`;

  const tableControls = document.createElement('div');
  tableControls.classList.add('table__cell', 'btn-group');


  // Кнопки
  const imageBtn = document.createElement('btn');
  imageBtn.classList.add('table__button','table__button_image');
  imageBtn.style.width = "20px";
  imageBtn.style.height = "20px";
  imageBtn.style.backgroundImage = 'url("/img/sprite.svg#image")';

  // const svgImage = document.createElement('svg');
  // svgImage.classList.add('icon');

  // const noImage = document.createElement('use');
  // noImage.setAttributeNS('http://www.w3.org/2000/xlink', 'xlink:href', '.sprite.svg#icon-no-image');

  const editBtn = document.createElement('btn');
  editBtn.classList.add('table__button','table__button_edit');
  editBtn.style.width = "20px";
  editBtn.style.height = "20px";
  

  const deleteBtn = document.createElement('btn');
  deleteBtn.classList.add('table__button','table__button_detele');
  deleteBtn.style.width = "20px";
  deleteBtn.style.height = "20px";
  
  // Добавляем кнопки в div
  // svgImage.append(noImage);
  // imageBtn.append(svgImage);
  tableControls.append(imageBtn, editBtn, deleteBtn);

  row.append(
    cellId,
    cellTitle,
    cellCategory,
    cellUnits,
    cellCount,
    cellPrice,
    cellTotalPrice,
    tableControls
  );

  return row;
};