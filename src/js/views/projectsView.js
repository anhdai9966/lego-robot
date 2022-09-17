import ModalView from './modalView.js';

import icons from 'url:../../images/icon.svg';

class ProjectsView extends ModalView {
  constructor() {
    super();
  }
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    let curIndex = this._index;
    let numIndex = this._data.links.length;

    // index 1, và có những index khác
    if (+curIndex === 1 && numIndex > 1) {
      return /*html*/ `        
        <div class="modal__overlay"></div>

        <div class="modal__wrapper modal__wrapper-project">
          <div class="modal__wrap">
            <img src="${this._data.links[curIndex - 1]}" alt="${this._data.name}" class="modal__img">
          </div>

          <button data-index="${curIndex + 1}" class="modal__btn modal__btn-right">
            <svg class="modal__icon">
              <use href='${icons}#icon-right'></use>
            </svg>
          </button>

          <button class="modal__btn modal__btn-close">
            <svg class="modal__icon">
              <use href='${icons}#icon-xmark'></use>
            </svg>
          </button>
        </div>
      `;
    }

    // index cuối
    if (+curIndex === numIndex && numIndex > 1) {
      return /*html*/ `        
        <div class="modal__overlay"></div>

        <div class="modal__wrapper modal__wrapper-project">
          <div class="modal__wrap">
            <img src="${this._data.links[curIndex - 1]}" alt="${this._data.name}" class="modal__img">
          </div>

          <button data-index="${curIndex - 1}" class="modal__btn modal__btn-left">
            <svg class="modal__icon">
              <use href='${icons}#icon-left'></use>
            </svg>
          </button>

          <button class="modal__btn modal__btn-close">
            <svg class="modal__icon">
              <use href='${icons}#icon-xmark'></use>
            </svg>
          </button>
        </div>
      `;
    }

    // những index còn lại
    if (+curIndex < numIndex) {
      return /*html*/ `        
        <div class="modal__overlay"></div>

        <div class="modal__wrapper modal__wrapper-project">
          <div class="modal__wrap">
            <img src="${this._data.links[curIndex - 1]}" alt="${this._data.name}" class="modal__img">
          </div>

          <button data-index="${curIndex - 1}" class="modal__btn modal__btn-left">
            <svg class="modal__icon">
              <use href='${icons}#icon-left'></use>
            </svg>
          </button>

          <button data-index="${curIndex + 1}" class="modal__btn modal__btn-right">
            <svg class="modal__icon">
              <use href='${icons}#icon-right'></use>
            </svg>
          </button>

          <button class="modal__btn modal__btn-close">
            <svg class="modal__icon">
              <use href='${icons}#icon-xmark'></use>
            </svg>
          </button>
        </div>
      `;
    }

    // chỉ có 1 index
    return /*html */`
      <div class="modal__overlay"></div>

      <div class="modal__wrapper modal__wrapper-project">
        <div class="modal__wrap">
          <img src="${this._data.links[curIndex - 1]}" alt="${this._data.name}" class="modal__img">
        </div>

        <button class="modal__btn modal__btn-close">
          <svg class="modal__icon">
            <use href='${icons}#icon-xmark'></use>
          </svg>
        </button>
      </div>
    `;
  }
}

export default new ProjectsView();