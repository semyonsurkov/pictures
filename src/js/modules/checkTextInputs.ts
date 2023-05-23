export const checkTextInputs = (selector: string) => {
  const textInputs = document.querySelectorAll(selector);

  textInputs.forEach((input) => {
    input.addEventListener('keypress', function (e: Event) {
      const event = e as KeyboardEvent;
      if (event.key.match(/[^а-яё 0-9]/gi)) {
        event.preventDefault();
      }
    });
  });
};
