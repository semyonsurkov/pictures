import { getData } from '../services/requests';

export interface CardData {
  src: string;
  title: string;
  link: string;
}

export const showMoreElements = (trigger: string, wrapper: string): void => {
  const btn: Element | null = document.querySelector(trigger);

  btn?.addEventListener('click', function (this: Element) {
    getData('./db.json')
      .then((data: { styles: CardData[] }) => createCards(data.styles))
      .catch((error: Error) => console.log(error));

    this.remove();
  });

  const createCards = (response: CardData[]): void => {
    console.log(response);
    const container: Element | null = document.querySelector(wrapper);

    response.forEach((card: CardData) => {
      let cardTemplate = document.createElement('div');

      cardTemplate.classList.add(
        'animated',
        'fadeInUp',
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1'
      );

      cardTemplate.innerHTML = `
        <div class="styles-block">
          <img src=${card.src} alt="style">
          <h4>${card.title}</h4>
          <a href="${card.link}">Подробнее</a>
        </div>
      `;

      container?.appendChild(cardTemplate);
    });
  };
};
