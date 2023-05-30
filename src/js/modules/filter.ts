export const filter = () => {
  const menu = document.querySelector('.portfolio-menu') as HTMLElement;
  const items = menu?.querySelectorAll('li'); 
  const btnAll = menu?.querySelector('.all');
  const btnLovers = menu?.querySelector('.lovers');
  const btnChef = menu?.querySelector('.chef');
  const btnGirl = menu?.querySelector('.girl');
  const btnGuy = menu?.querySelector('.guy');
  const btnGrandmother = menu?.querySelector('.grandmother');
  const btnGranddad = menu?.querySelector('.granddad');
  const wrapper = document.querySelector('.portfolio-wrapper') as HTMLElement;
  const markAll = wrapper?.querySelectorAll('.all');
  const markGirl = wrapper?.querySelectorAll('.girl');
  const markLovers = wrapper?.querySelectorAll('.lovers');
  const markChef = wrapper?.querySelectorAll('.chef');
  const markGuy = wrapper?.querySelectorAll('.guy');
  const no: HTMLElement = document.querySelector(
    '.portfolio-no'
  ) as HTMLElement;

const typeFilter = (markType: NodeListOf<HTMLElement> | null) => {
  markAll?.forEach((mark) => {
    mark.style.display = 'none';
    mark.classList.remove('animated', 'fadeIn');
  });

  no.style.display = 'none';
  no.classList.remove('animated', 'fadeIn');

  if (markType) {
    markType.forEach((mark) => {
      mark.style.display = 'block';
      mark.classList.add('animated', 'fadeIn');
    });
  } else {
    no.style.display = 'block';
    no.classList.add('animated', 'fadeIn');
  }
};


  btnAll?.addEventListener('click', () => {
    typeFilter(markAll);
  });

  btnLovers?.addEventListener('click', () => {
    typeFilter(markLovers);
  });

  btnChef?.addEventListener('click', () => {
    typeFilter(markChef);
  });

  btnGuy?.addEventListener('click', () => {
    typeFilter(markGuy);
  });

  btnGirl?.addEventListener('click', () => {
    typeFilter(markGirl);
  });

  btnGrandmother?.addEventListener('click', () => {
    typeFilter(null);
  });

  btnGranddad?.addEventListener('click', () => {
    typeFilter(null);
  });

  menu?.addEventListener('click', (e) => {
    let target = e.target as HTMLElement;

    if (target && target.tagName === 'LI') {
      items?.forEach((btn) => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};
