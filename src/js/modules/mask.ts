export const mask = (selector: string): void => {
  const setCursorPosition = (
    position: number,
    element: HTMLInputElement
  ): void => {
    element.focus();

    if (element.setSelectionRange) {
      element.setSelectionRange(position, position);
    } else {
      if ((element as any).createTextRange) {
        let range = (element as any).createTextRange();

        range.collapse(true);
        range.moveEnd('character', position);
        range.moveStart('character', position);
        range.select();
      }
    }
  };

  const createMask = (event: Event): void => {
    const matrix = '+7 (___) ___ __ __';
    const def = matrix.replace(/\D/g, '');
    let value = (event.target as HTMLInputElement).value.replace(/\D/g, '');
    let i = 0;

    if (def.length >= value.length) {
      value = def;
    }

    (event.target as HTMLInputElement).value = matrix.replace(
      /./g,
      function (s) {
        return /[_\d]/.test(s) && i < value.length
          ? value.charAt(i++)
          : i >= value.length
          ? ''
          : s;
      }
    );

    if (event.type === 'blur') {
      if ((event.target as HTMLInputElement).value.length === 2) {
        (event.target as HTMLInputElement).value = '';
      }
    } else {
      setCursorPosition(
        (event.target as HTMLInputElement).value.length,
        event.target as HTMLInputElement
      );
    }
  };

  let inputs = document.querySelectorAll<HTMLInputElement>(selector);

  inputs.forEach((input) => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
