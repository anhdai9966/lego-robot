class ProjectView {
  _parentElement = document.querySelector('.project');

  addHandlerClickCard(handler) {
    this._parentElement.addEventListener('click', (e) => {
      const btn = e.target.closest('.card__item');
      if(!btn) return ;
      const id = btn.dataset.id;
      handler(id);
    })
  }
}

export default new ProjectView();