interface CalculatorArgs {
  size: string;
  material: string;
  options: string;
  promocode: string;
  result: string;
}

export const calculator = (args: CalculatorArgs): void => {
  const { size, material, options, promocode, result } = args;
  const sizeBlock: HTMLInputElement | null = document.querySelector(size);
  const materialBlock: HTMLInputElement | null = document.querySelector(material);
  const optionsBlock: HTMLInputElement | null = document.querySelector(options);
  const promocodeBlock: HTMLInputElement | null = document.querySelector(promocode);
  const resultBlock: HTMLElement | null = document.querySelector(result);

  let sum = 0;

  const calcFunc = (): void => {
    sum = Math.round(
      +sizeBlock!.value * +materialBlock!.value + +optionsBlock!.value
    );

    if (sizeBlock!.value === '' || materialBlock!.value === '') {
      if (resultBlock) {
        resultBlock.textContent =
          'Пожалуйста, выберите размер и материал картины';
      }
    } else if (promocodeBlock?.value === 'IWANTPOPART') {
      if (resultBlock) {
        resultBlock.textContent = Math.round(sum * 0.7).toString();
      }
    } else {
      if (resultBlock) {
        resultBlock.textContent = sum.toString();
      }
    }
  };

  sizeBlock?.addEventListener('change', calcFunc);
  materialBlock?.addEventListener('change', calcFunc);
  optionsBlock?.addEventListener('change', calcFunc);
  promocodeBlock?.addEventListener('input', calcFunc);
};
