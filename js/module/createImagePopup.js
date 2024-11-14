export const createImagePopup = (imgPath) => {
  let top = window.screen.height / 2 - 300;
  let left = window.screen.width / 2 - 300;
  const imgPopup = open(imgPath, 'blank','width=600,height=600');
  imgPopup.moveTo(left,top);
}