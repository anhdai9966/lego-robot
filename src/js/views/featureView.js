class FeatureView {
  _picElement = document.querySelector('.feature__pic');
  
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerClickPic(handler) {
    this._picElement.addEventListener('click', handler);
  }
}

export default new FeatureView();