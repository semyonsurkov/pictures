export const showMoreElements = (trigger: string, styles: string): void => {
  const cards: NodeListOf<Element> = document.querySelectorAll(styles);
  const btn: Element | null = document.querySelector(trigger);

  cards.forEach((card: Element) => {
    card.classList.add('animated', 'fadeInUp');
  });

  if (btn) {
    btn.addEventListener('click', () => {
      cards.forEach((card: Element) => {
        card.classList.remove(
          'hidden-lg',
          'hidden-md',
          'hidden-sm',
          'hidden-xs'
        );
        card.classList.add(
          'col-sm-3',
          'col-sm-offset-0',
          'col-xs-10',
          'col-xs-offset-1'
        );
      });
      btn.remove();
    });
  }
};
