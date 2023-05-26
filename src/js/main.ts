import {
  modals,
  sliders,
  forms,
  mask,
  checkTextInputs,
  showMoreElements,
  calculator,
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
  calculator('#size', '#material', '#options', '.promocode', '.calc-price');
});
