import { modals, sliders, forms } from './modules';

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
});
