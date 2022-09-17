import ModalView from './modalView.js';

import icons from 'url:../../images/icon.svg';

class VideoView extends ModalView {
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return /*html*/ `        
    <div class="modal__overlay"></div>

    <div class="modal__wrapper">
      <div class="modal__wrap">
        <iframe id="videoId" class="modal__video" src="https://www.youtube.com/embed/beCJN8an_DM?autoplay=1&mute=0" title="Lắp ráp - Lập trình Lego Robot Inventor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default new VideoView();