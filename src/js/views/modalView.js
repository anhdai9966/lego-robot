import View from './View.js';

export default class ModalView extends View {
  _parentElement = document.querySelector('.modal');
  _overlayElement = document.querySelector('.overlay');

  constructor() {
    super();
    this._addHandlerBtnClose();
    this._addHandlerOverlay();
  }
  
  shownModel() {
    this._parentElement.classList.remove('hidden');
    this._overlayElement.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this._parentElement.style.transform = 'scale(1)';
    }, 10);
  }
  hiddenModel() {
    this._parentElement.style.transform = 'scale(0.9)';
    this._overlayElement.classList.add('hidden');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      this._parentElement.classList.add('hidden');
    }, 300);
    this._parentElement.innerHTML = '';
  }
  
  _addHandlerBtnClose() {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.modal__btn-close');
      if (!btn) return;
      this.hiddenModel();
    })
  }
  _addHandlerOverlay() {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.modal__overlay');
      if (!btn) return;
      this.hiddenModel();
    })
  }
  addHandlerBtnLeft(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.modal__btn-left');
      if (!btn) return;
      const index = btn.dataset.index;
      handler(+index);
    })
  }
  addHandlerBtnRight(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.modal__btn-right');
      if (!btn) return;
      const index = btn.dataset.index;
      console.log(index)
      handler(+index);
    })
  }
}
