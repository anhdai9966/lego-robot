class HeaderView {
  _navUnderline = document.querySelector('.nav__underline');

  _navIntroduction = document.querySelector('.nav__item-introduction');
  _navSubject = document.querySelector('.nav__item-subject');
  _navContent = document.querySelector('.nav__item-content');
  _navTeacher = document.querySelector('.nav__item-teacher');
  _navPrice = document.querySelector('.nav__item-price');
  _navContact = document.querySelector('.nav__item-contact');

  _introduction = document.querySelector('#introduction');
  _subject = document.querySelector('#subject');
  _content = document.querySelector('#content');
  _teacher = document.querySelector('#teacher');
  _price = document.querySelector('#price');
  _contact = document.querySelector('#contact');

  _sidebarBtnOpen = document.querySelector('.header__btn-sidebar--open')
  _sidebarBtnClose = document.querySelector('.header__btn-sidebar--close')

  constructor() {
    this._addHandlerScroll();
  }
  
  _addHandlerScroll() {
    window.addEventListener('scroll', this._addhandlerAnimationUnderline.bind(this));
  };

  _addHandlerUnderline(element) {
    this._navUnderline.style.width = `${element.offsetWidth}px`;
    this._navUnderline.style.left = `${element.offsetLeft}px`;
  };

  _removeActive() {
    document.querySelector('.nav__item--active').classList.remove('nav__item--active');
  }

  _addhandlerAnimationUnderline() {
    let scrollValue = window.scrollY + 300;
    if (scrollValue >= +this._introduction.offsetTop) {
      this._removeActive();
      this._navIntroduction.classList.add('nav__item--active');
      this._addHandlerUnderline(this._navIntroduction);
    }
    if (scrollValue >= +this._subject.offsetTop) {
      this._removeActive();
      this._navSubject.classList.add('nav__item--active');
      this._addHandlerUnderline(this._navSubject);
    }
    if (scrollValue >= +this._content.offsetTop) {
      this._removeActive();
      this._navContent.classList.add('nav__item--active');
      this._addHandlerUnderline(this._navContent);
    }
    if (scrollValue >= +this._teacher.offsetTop) {
      this._removeActive();
      this._navTeacher.classList.add('nav__item--active');
      this._addHandlerUnderline(this._navTeacher);
    }
    if (scrollValue >= +this._price.offsetTop) {
      this._removeActive();
      this._navPrice.classList.add('nav__item--active');
      this._addHandlerUnderline(this._navPrice);
    }
    if (scrollValue >= +this._contact.offsetTop) {
      this._removeActive();
      this._navContact.classList.add('nav__item--active');
      this._addHandlerUnderline(this._navContact);
    }
  };

  togglebtn() {
    this._sidebarBtnOpen.classList.toggle('hidden');
    this._sidebarBtnClose.classList.toggle('hidden');
  }
  addHandlerOpenSidebar(handler) {
    this._sidebarBtnOpen.addEventListener('click', handler)
  }
  addHandlerCloseSidebar(handler) {
    this._sidebarBtnClose.addEventListener('click', handler)
  }
}

export default new HeaderView();