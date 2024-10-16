import addToBase from "./addToBase.js";
import productCost from "./productCost.js";

export const overlayControls = (elements, data) => {
  //Достаем нужные элементы
  const {
    modalOverlay,
    addProduct,
    modalForm,
    discountCheckbox,
    discountInput,
    countInput,
    priceInput,
  } = elements;

  //Начальное состояние нашей галочки со скидкой
  const initialFormState = () => {
    discountInput.setAttribute("disabled", "disabled");
    discountInput.value = '';
  }

  //Открытие модалки
  const openModal = () => {
    modalOverlay.classList.add('overlay_active');
    initialFormState();
  }

  //Закрытие модалки   
  const closeModal = () => {
    modalOverlay.classList.remove('overlay_active');
    modalForm.reset();
  }

  //Слушаем клики
  //Изменение состояния галочки
  discountCheckbox.addEventListener('change', () => {
    if (discountCheckbox.checked === true) {
      discountInput.removeAttribute('disabled')
      discountInput.value = 0;
    } else {
      productCost(elements);
      //Убрали галочку? Вернули исходное состояние
      initialFormState();
    }
  })

  //Слушаем изменения в форме , быстро пересчитываем сумму товара
  discountInput.addEventListener('change', () => {
    productCost(elements);
  });
  countInput.addEventListener('change', () => {
    productCost(elements);
  });
  priceInput.addEventListener('change', () => {
    productCost(elements);
  });

  //Кнопка Открытия(Добавления)
  addProduct.addEventListener('click', () => {
    openModal();
  });

  //Кнопка Закрытия модалки(В нашем случай сам оверлэй)
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal(); 
    }
  });

  // Отправка формы
  modalForm.addEventListener('submit', e => {
    e.preventDefault();
    addToBase(elements, data);
    closeModal();
  })

}