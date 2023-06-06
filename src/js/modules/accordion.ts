export const accordion = (triggersSelector: string): void => {
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach((btn: Element) => {
    btn.addEventListener('click', function (this: HTMLElement) {
      this.classList.toggle('active-style');
      const nextElementSibling = this.nextElementSibling as HTMLElement | null;

      if (nextElementSibling !== null) {
        nextElementSibling.classList.toggle('active-content');

        if (this.classList.contains('active-style')) {
          nextElementSibling.style.maxHeight =
            nextElementSibling.scrollHeight + 80 + 'px';
        } else {
          nextElementSibling.style.maxHeight = '0px';
        }
      }
    });
  });
};
