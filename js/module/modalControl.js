export const modalControll = (addProductBtn, modalOverlay) => {
  const modalOpen = () => {
    modalOverlay.classList.add('overlay_active');
  };

  const modalClose = () => {
    modalOverlay.classList.remove('overlay_active');
  };

  addProductBtn.addEventListener('click', modalOpen);

  modalOverlay.addEventListener('click', e => {
    const target = e.target;

    if (target === modalOverlay ||
        target.closest('.modal-header__close')) {
      modalClose();   
    }
  });

  return {
    modalClose,
  };

};
