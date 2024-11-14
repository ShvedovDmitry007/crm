export const createRow = ({id, title, price, category, units, count, discont, images}) => {
  console.log('images: ', images);

  if (discont === false) {
    discont = 0;
  }
  
  let sum = price * count;
  sum -= (sum * discont) / 100;

  const row = document.createElement('tr');
  row.classList.add('table__row');
  row.setAttribute('data-id', id);
  row.dataset.image = `./img/product/${id}.jpg`

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
  cellTotalPrice.innerHTML = `${sum} ₽`;

  //Кнопки
  const createButtonsGroup = params => {
    const btnGroup = document.createElement('td');
    btnGroup.classList.add('table__cell', 'btn-group');

    const btns = params.map(({ className, type, svgImg }) => {
      // Добавляем элемент <svg>
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '20');
      svg.setAttribute('height', '20');
      const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', svgImg);
      svg.append(useElement);

      const button = document.createElement('button');
      button.type = type;
      button.className = className;
      button.append(svg);

      return button;
    });
    
    btnGroup.append(...btns);

    return {
      btnGroup,
      btns,
    };
  };

  const buttonGroup = createButtonsGroup([
    {
      className: 'table__button table__button_add-img',
      type: 'button',
      svgImg: '/img/sprite.svg#no-image',
    },
    {
      className: 'table__button table__button_edit',
      type: 'button',
      svgImg: '/img/sprite.svg#edit',
    },
    {
      className: 'table__button table__button_delete',
      type: 'button',
      svgImg: '/img/sprite.svg#delete',
    },
  ]);

  row.append(
    cellId,
    cellTitle,
    cellCategory,
    cellUnits,
    cellCount,
    cellPrice,
    cellTotalPrice,
    buttonGroup.btnGroup,
  );

  return row;
};