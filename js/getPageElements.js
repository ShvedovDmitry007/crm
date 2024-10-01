export const getPageElements = () => {
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.overlay');
  const modalHeader = document.querySelector('.modal-header__title');
  const modalClose = document.querySelector('.modal-header__close');
  // Форма модального окна
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
  const addBtn = document.querySelector('.filter__add-product');

  return {
    modal,
    modalOverlay,
    modalHeader,
    modalClose,
    productName,
    productCategory,
    productUnits,
    discountCheckbox,
    discountInput,
    productTextArea,
    productCount,
    productPrice,
    btnAddImage,
    btnAddProduct,
    totalPrice,
    table,
    addBtn,
  }
}