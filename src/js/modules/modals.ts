export const modals = () => {
  let buttonPressed = false;

  const bindModal = (
    triggersSelector: string,
    modalSelector: string,
    closeSelector: string,
    destroy = false
  ) => {
    const triggers = document.querySelectorAll(triggersSelector);
    const modal: HTMLElement | null = document.querySelector(modalSelector);
    const close: HTMLElement | null = document.querySelector(closeSelector);
    const windows = document.querySelectorAll<HTMLElement>('[data-modal]');
    const scroll = calcScroll();

    const closeModal = () => {
      if (!modal) return;
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    const openModal = () => {
      if (!modal) return;
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        buttonPressed = true;

        if (destroy) {
          trigger.remove();
        }

        windows.forEach((window) => {
          window.style.display = 'none';
          window.classList.add('animated', 'fadeIn');
        });

        openModal();
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close?.addEventListener('click', () => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });
      closeModal();
      document.body.style.marginRight = `0px`;
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        windows.forEach((window) => {
          window.style.display = 'none';
        });

        closeModal();
        document.body.style.marginRight = `0px`;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal?.style.display === 'block') {
        closeModal();
      }
    });
  };

  const showModalByTime = (selector: string, time: number) => {
    setTimeout(() => {
      let display: string | null = null;

      document.querySelectorAll<HTMLElement>('[data-modal]').forEach((item) => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

      const targetElement = document.querySelector<HTMLElement>(selector);
      if (!display && targetElement) {
        targetElement.style.display = 'block';
        document.body.style.overflow = 'hidden';
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  };

  const calcScroll = () => {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  };

  const openByScroll = (selector: string) => {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      if (
        !buttonPressed &&
        window.pageYOffset + document.documentElement.clientHeight >=
          scrollHeight
      ) {
        (document.querySelector(selector) as HTMLElement).click();
      }
    });
  };

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal(
    '.button-consultation',
    '.popup-consultation',
    '.popup-consultation .popup-close'
  );
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 60000);
};
