// import { checkNumInputs } from './index.js';

export const forms = (): void => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const uploads =
    document.querySelectorAll<HTMLInputElement>('[name="upload"]');

  // checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Данные не отправлены',
    spinner: 'src/assets/img/spinner.gif',
    ok: 'src/assets/img/ok.png',
    fail: 'src/assets/img/fail.png',
  };

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php',
  };

  const postData = async (url: string, formData: FormData): Promise<string> => {
    const object: { [key: string]: string } = {};
    formData.forEach((value, key) => (object[key] = value.toString()));
    const body = JSON.stringify(object);
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
    uploads.forEach((upload) => {
      upload.previousElementSibling!.textContent = 'Файл не выбран';
    });
  };

  uploads.forEach((upload) => {
    upload.addEventListener('input', () => {
      console.log(upload.files![0]);
      let dots: string;
      const arraySplit = upload.files![0].name.split('.');
      arraySplit[0].length > 6 ? (dots = '...') : (dots = '.');
      const name = arraySplit[0].substring(0, 6) + dots + arraySplit[1];
      upload.previousElementSibling!.textContent = name;
    });
  });

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode!.appendChild(statusMessage);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);

      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      const textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(form);
      const api =
        form.closest('.popup-design') || form.classList.contains('calc_form')
          ? path.designer
          : path.question;
      console.log(api);

      postData('https://simple-server-cumz.onrender.com/api/data', formData)
        .then((result) => {
          console.log(result);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
          }, 5000);
        });
    });
  });
};
