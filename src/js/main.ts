import {
  modals,
  sliders,
  forms,
  mask,
  checkTextInputs,
  showMoreElements,
  calculator,
  filter,
  imagesSize,
  accordion,
  burger,
  scrolling,
  drop,
} from './modules';

window.addEventListener('DOMContentLoaded', () => {
  modals();
  sliders(
    '.feedback-slider-item',
    'horizontal',
    '.main-prev-btn',
    '.main-next-btn'
  );
  sliders('.main-slider-item', 'vertical');
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreElements('.button-styles', '#styles .row');
  calculator({
    size: '#size',
    material: '#material',
    options: '#options',
    promocode: '.promocode',
    result: '.calc-price',
  });
  filter();
  imagesSize('.sizes-block');
  accordion('.accordion-heading');
  burger('.burger-menu', '.burger');
  scrolling('.pageup');
  drop();
});
