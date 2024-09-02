'use strict';

const modalHeader = document.querySelector('.modal-header__title');
const modalClose = document.querySelector('.modal-header__close');
// Форма
const productName = document.querySelector('.product__input_name');
const productCategory = document.querySelector('.product__input_category');
const productUnits = document.querySelector('.product__input_units');
const discountCheckbox = document.querySelector('.discount__checkbox');
const discountInput = document.querySelector('.discount__input');
const productTextArea = document.querySelector('.product__input_text-area');
const productCount = document.querySelector('.product__input_count');
const productPrice = document.querySelector('.product__input_price');
const btnAddImage = document.querySelector('.product__image-input');
const btnAddProduct = document.querySelector('.modal-footer__add-product');
const totalPrice = document.querySelector('.modal-footer__cost');

// Таблица
const table = document.querySelector('.table__body');

const products = [
  {
    id: 253842678,
    title: "Смартфон Xiaomi 11T 8/128GB",
    category: "Мобильный телефон",
    units: "шт",
    count: 3,
    price: `$${295}`,
    total: 0,
  },
  {
    id: 296378448,
    title: "Ноутбук Apple MacBook Air 13 M2 8 core/8 core/8/256/Space Gray",
    category: "Ноутбуки, планшеты, компьютеры",
    units: "шт",
    count: 5,
    price: `$${1250}`,
    total: 0,
  },
  {
    id: 285437695,
    title: "Телевизор Hisense 65A6K",
    category: "Телевизоры и цифровое ТВ",
    units: "шт",
    count: 13,
    price: `$${500}`,
    total: 0,
  },
];

const createRow = item => {
  const tableRow = document.createElement('tr');
  tableRow.classList.add('table__row');

  const cells = Object.values(item).map((value) => {
    const tableCell = document.createElement('td');
    tableCell.classList.add('table__cell');
    tableCell.innerHTML = value;
    
    return tableCell;
  });

  cells.map((tableCell) => tableRow.append(tableCell));
  return tableRow;
}

const renderGoods = (obj) => {
  obj.map((objItem) => table.append(createRow(objItem)));
  return table;
}

renderGoods(products);
