export const modalBtn = (addTableBtn, formOverlay) => {

  addTableBtn.addEventListener('click', () => {
    formOverlay.classList.add('overlay_active');
  });

  formOverlay.addEventListener('click', e => {
    const target = e.target;

    if (target === formOverlay ||
        target.closest('.modal-header__close')) {
          formOverlay.classList.remove('overlay_active');
    }
  });
};
