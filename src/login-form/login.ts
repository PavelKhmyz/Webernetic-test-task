import { authorizationApi } from '../api/api';

document.getElementById('loginInput')?.addEventListener('blur', (event: Event) => loginValidator((event.target as HTMLInputElement).value));
document.getElementById('passwordInput')?.addEventListener('blur', (event: Event) => passwordValidator((event.target as HTMLInputElement).value));

document.getElementById('loginInput')?.addEventListener('focus', () => loginFocus());
document.getElementById('passwordInput')?.addEventListener('focus', () => passwordFocus());

document.querySelector('.login-form__button_blue')?.addEventListener('click', () => submitForm());

const LOGIN_LENGTH = 4;
const PASSWORD_LENGTH = 4;

const loginFocus = () => {
  const input: HTMLElement | null = document.getElementById('loginInput');

  if(input) {
    input.classList.remove('login-form__input_error');
  }  
}

const passwordFocus = () => {
  const input: HTMLElement | null = document.getElementById('passwordInput');

  if(input) {
    input.classList.remove('login-form__input_error');
  }  
}

const loginValidator = (value: string): boolean => {
  const input: HTMLElement | null = document.getElementById('loginInput');
  const error: HTMLElement | null = document.querySelector('.login-form__error');

  if(!input || !error) {
    return false;
  }

  if(!value) {
    input.classList.add('login-form__input_error')
    error.innerText = 'Введите email или телефон';

    return false;
  }

  if(value.length < LOGIN_LENGTH) {
    input.classList.add('login-form__input_error')
    error.innerText = `Логин должен содержать больше ${LOGIN_LENGTH - 1} символов`;

    return false;
  }

  input.classList.remove('login-form__input_error');
  error.innerText = '';

  return true;
}

const passwordValidator = (value: string): boolean => {
  const input: HTMLElement | null = document.getElementById('passwordInput');
  const error: HTMLElement | null = document.querySelector('.login-form__error');

  if(!input || !error) {
    return false;
  }

  if(!value) {
    input.classList.add('login-form__input_error')
    error.innerText = 'Введите пароль';

    return false;
  }

  if(value.length < PASSWORD_LENGTH) {
    input.classList.add('login-form__input_error')
    error.innerText = `Пароль должен содержать больше ${PASSWORD_LENGTH - 1} символов`;

    return false;
  }

  input.classList.remove('login-form__input_error');
  error.innerText = '';

  return true;
}

const submitForm = () => {
  const loginInput: HTMLElement | null = document.getElementById('loginInput');
  const passwordInput: HTMLElement | null = document.getElementById('passwordInput');

  const login = (loginInput as HTMLInputElement).value;
  const password = (passwordInput as HTMLInputElement).value;

  const isValidLogin = loginValidator(login);
  const isValidPassword = passwordValidator(password);

  if (isValidLogin && isValidPassword) {
    authorizationApi.login({
      login,
      password,
    });
  }
}
