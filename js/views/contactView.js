import { validateEmail, validatePhoneNumber, validateName } from '../helpers.js';

class ContactView {
  _parentElement = document.querySelector('.form');

  _emailInput = this._parentElement.querySelector('.contact__input-email');
  _phoneNumberInput = this._parentElement.querySelector('.contact__input-phoneNumber');
  _nameInput = this._parentElement.querySelector('.contact__input-name');
  _noteInput = this._parentElement.querySelector('.contact__input-note');

  _message = 'Trường này không được để trống';

  constructor() {
    this._handlerEmailValidator();
    this._handlerPhoneNumberValidator();
    this._handlerNameValidator();
  }

  addHandlerSubmit(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = new FormData(this._parentElement);
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  removeAllInputValue() {
    this._emailInput.style.border = 'thin solid #ccc;';
    this._phoneNumberInput.style.border = 'thin solid #ccc;';
    this._nameInput.style.border = 'thin solid #ccc;';
    this._emailInput.value = '';
    this._phoneNumberInput.value = '';
    this._nameInput.value = '';
    this._noteInput.value = '';
  }

  _handlerEmailValidator() {
    this._emailInput.addEventListener('blur', e => {
      const emailValue = this.getEmail();

      this.emailValidate(emailValue);
    });
  }

  getEmail() {
    return this._emailInput.value;
  }

  emailValidate(val) {
    if (val) {
      const message = validateEmail(val);
      if (message) {
        this._emailInput.nextElementSibling.classList.remove('hidden');
        this._emailInput.nextElementSibling.innerHTML = message;
        this._emailInput.style.border = 'thin solid #FF3B30';
      } else {
        this._emailInput.nextElementSibling.classList.add('hidden');
        this._emailInput.style.border = 'thin solid #34C759';
        this._emailInput.nextElementSibling.innerHTML = '';
      }
    } else {
      // this._emailInput.nextElementSibling.classList.add('hidden');
      // this._emailInput.nextElementSibling.innerHTML = '';
      // this._emailInput.style.border = 'thin solid #ccc';
      this._emailInput.nextElementSibling.classList.remove('hidden');
      this._emailInput.nextElementSibling.innerHTML = this._message;
      this._emailInput.style.border = 'thin solid #FF3B30';
    }
  }

  _handlerPhoneNumberValidator() {
    this._phoneNumberInput.addEventListener('blur', e => {
      const phoneNumberValue = this.getPhoneNumber();

      this.phoneNumberValidate(phoneNumberValue);
    });
  }

  getPhoneNumber() {
    return this._phoneNumberInput.value;
  }

  phoneNumberValidate(val) {
    if (val) {
      const message = validatePhoneNumber(val);
      if (message) {
        this._phoneNumberInput.nextElementSibling.classList.remove('hidden');
        this._phoneNumberInput.nextElementSibling.innerHTML = message;
        this._phoneNumberInput.style.border = 'thin solid #FF3B30';
      } else {
        this._phoneNumberInput.nextElementSibling.classList.add('hidden');
        this._phoneNumberInput.style.border = 'thin solid #34C759';
        this._phoneNumberInput.nextElementSibling.innerHTML = '';
      }
    } else {
      // this._phoneNumberInput.nextElementSibling.classList.add('hidden');
      // this._phoneNumberInput.nextElementSibling.innerHTML = '';
      // this._phoneNumberInput.style.border = 'thin solid #ccc';
      this._phoneNumberInput.nextElementSibling.classList.remove('hidden');
      this._phoneNumberInput.nextElementSibling.innerHTML = this._message;
      this._phoneNumberInput.style.border = 'thin solid #FF3B30';
    }
  }

  _handlerNameValidator() {
    this._nameInput.addEventListener('blur', e => {
      const nameValue = this.getName();

      this.nameValidate(nameValue);
    });
  }

  getName() {
    return this._nameInput.value;
  }

  nameValidate(val) {
    const message = validateName(val);
    if (message) {
      this._nameInput.nextElementSibling.classList.remove('hidden');
      this._nameInput.nextElementSibling.innerHTML = message;
      this._nameInput.style.border = 'thin solid #FF3B30';
    } else {
      this._nameInput.nextElementSibling.classList.add('hidden');
      this._nameInput.style.border = 'thin solid #34C759';
      this._nameInput.nextElementSibling.innerHTML = '';
    }
  }
}

export default new ContactView();
