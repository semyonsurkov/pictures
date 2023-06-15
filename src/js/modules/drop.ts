export const drop = () => {
  const fileInputs =
    document.querySelectorAll<HTMLInputElement>('[name="upload"]');
  const events: string[] = ['dragenter', 'dragleave', 'dragover', 'drop'];

  events.forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, preventDefaults, false);
    });
  });

  function preventDefaults(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item: HTMLElement) {
    item.closest('.file_upload')!.style.border = '5px solid yellow';
    item.closest('.file_upload')!.style.backgroundColor = 'rgba(0,0,0, .7)';
  }

  function unhighlight(item: HTMLElement) {
    item.closest('.file_upload')!.style.border = 'none';
    if (item.closest('.calc_form')) {
      item.closest('.file_upload')!.style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload')!.style.backgroundColor = '#ededed';
    }
  }

  ['dragenter', 'dragover'].forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, () => highlight(input), false);
    });
  });

  ['dragleave', 'drop'].forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, () => unhighlight(input), false);
    });
  });

  fileInputs.forEach((input) => {
    input.addEventListener('drop', (e) => {
      input.files = e.dataTransfer!.files;
      let dots: string;
      const arraySplit = input.files![0].name.split('.');
      arraySplit[0].length > 6 ? (dots = '...') : (dots = '.');
      const name = arraySplit[0].substring(0, 6) + dots + arraySplit[1];
      input.previousElementSibling!.textContent = name;

      const file = input.files![0];
      const formData = new FormData();
      formData.append('image', file);

      fetch('https://eogq7bt1cf5yuc2.m.pipedream.net', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Ответ от сервера:', data);
        })
        .catch((error) => {
          console.error('Произошла ошибка:', error);
        });
    });
  });
};
