import View from './View.js';

// import icons from 'url:../../images/icon.svg';

class MessageDoneView extends View {
  _parentElement = document.querySelector('.message');

  shown() {
    this._parentElement.classList.remove('hidden');
  }
  hidden() {
    this._parentElement.classList.add('hidden');
  }

  _generateMarkup() {
    return /*html*/ `        
      <div class="message__wrapper">
        <svg class="message__icon">
          <use href='./images/icon.svg#icon-done'></use>
        </svg>

        <h3>Đăng ký thành công.</h3>
      </div>
    `;
  }
}
export default new MessageDoneView();