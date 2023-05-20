export const sliders = (
  slides: string | NodeListOf<HTMLElement>,
  direction: string,
  previous?: string,
  next?: string
): void => {
  let slideIndex: number = 1;
  let paused: number;

  const items: NodeListOf<HTMLElement> =
    typeof slides === 'string' ? document.querySelectorAll(slides) : slides;

  function showSlides(n: number): void {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach((item: HTMLElement) => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function changeSlides(n: number) {
    showSlides((slideIndex += n));
  }

  try {
    if (previous && next) {
      const previousButton: HTMLElement | null =
        document.querySelector(previous);
      const nextButton: HTMLElement | null = document.querySelector(next);

      previousButton?.addEventListener('click', () => {
        changeSlides(-1);
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRight');
      });

      nextButton?.addEventListener('click', () => {
        changeSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      });
    }
  } catch (e) {}

  function activateAnimation(): void {
    if (direction === 'vertical') {
      paused = setInterval(function () {
        changeSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function () {
        changeSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }

  activateAnimation();

  items[0].parentNode?.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });

  items[0].parentNode?.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
