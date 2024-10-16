export const getPageElements = () => {
  const modal = document.querySelector('.modal');
  const modalForm = document.querySelector('#product-form');
  const modalOverlay = document.querySelector('.overlay');
  const modalHeader = document.querySelector('.modal-header__title');
  const modalClose = document.querySelector('.modal-header__close');
  // Форма модального окна
  const nameInput = document.querySelector('.product__input_name');
  const categoryInput = document.querySelector('.product__input_category');
  const unitsInput = document.querySelector('.product__input_units');
  const discountCheckbox = document.querySelector('.discount__checkbox');
  const discountInput = document.querySelector('.discount__input');
  const textArea = document.querySelector('.product__input_text-area');
  const countInput = document.querySelector('.product__input_count');
  const priceInput = document.querySelector('.product__input_price');
  const btnAddImage = document.querySelector('.product__image-input');
  const modalAddProduct = document.querySelector('.modal-footer__add-product');
  const newProductTotalPrice = document.querySelector('.modal-footer__cost');
  const allProductsCost = document.querySelector('.header__cost');

  // Таблица
  const tableBody = document.querySelector('.table__body');
  const addProduct = document.querySelector('.filter__add-product');

  return {
    modal,
    modalForm,
    modalOverlay,
    modalHeader,
    modalClose,
    nameInput,
    categoryInput,
    unitsInput,
    discountCheckbox,
    discountInput,
    textArea,
    countInput,
    priceInput,
    btnAddImage,
    modalAddProduct,
    newProductTotalPrice,
    tableBody,
    addProduct,
    allProductsCost
  };
};