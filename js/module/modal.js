export const modalBtn = (addTableBtn, formOverlay, modal, modalClose) => {

  addTableBtn.addEventListener('click', () => {
    formOverlay.classList.add('overlay_active');
  });

  modal.addEventListener('click', event => {
    event.stopPropagation();
  });

  formOverlay.addEventListener('click', () => {
    formOverlay.classList.remove('overlay_active');
  });

  modalClose.addEventListener('click', () => {
    formOverlay.classList.remove('overlay_active');
  });
};

