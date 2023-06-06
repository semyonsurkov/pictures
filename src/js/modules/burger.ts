export const burger = (menuSelector: string, burgerSelector: string): void => {
  const menuElement = document.querySelector(menuSelector) as HTMLElement; 
  const burgerElement = document.querySelector(burgerSelector) as HTMLElement; 

  menuElement.style.display = 'none'; 

  burgerElement?.addEventListener('click', () => {
    if (
      menuElement.style.display === 'none' &&
      window.screen.availWidth < 993
    ) {
      menuElement.style.display = 'block';
    } else {
      menuElement.style.display = 'none';
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElement.style.display = 'none';
    }
  });
};
