export const scrolling = (upSelector: string): void => {
  const upElem = document.querySelector(upSelector) as HTMLElement;

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  let links = document.querySelectorAll(
    '[href^="#"]'
  ) as NodeListOf<HTMLAnchorElement>;
  let speed = 0.3;

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      let widthTop = document.documentElement.scrollTop;
      let hash = link.hash;
      let toBlock =
        (document.querySelector(hash) as HTMLElement)?.getBoundingClientRect()
          .top || 0;
      let start: number | null = null;

      requestAnimationFrame(step);

      function step(time: number) {
        if (start === null) {
          start = time;
        }

        let progress = time - start;
        let r =
          toBlock < 0
            ? Math.max(widthTop - progress / speed, widthTop + toBlock)
            : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r !== widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};
