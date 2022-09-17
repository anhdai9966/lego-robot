import icons from 'url:../../images/icon.svg';

export default class View {
  _data;
  _index;

  render(data = undefined, index = undefined) {
    if (data) this._data = data;
    if (index != undefined) this._index = index;

    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderLoading() {
    const markup = /*html*/`
      <div class="loading">
        <svg class="loading__spinner">
          <use href='${icons}#icon-loading'></use>
        </svg>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}