class SidebarView {
  _parentElement = document.querySelector('.sidebar')
  _navIntroduction = document.querySelector('.sidebar-nav__item-introduction');
  _navSubject = document.querySelector('.sidebar-nav__item-subject');
  _navContent = document.querySelector('.sidebar-nav__item-content');
  _navTeacher = document.querySelector('.sidebar-nav__item-teacher');
  _navPrice = document.querySelector('.sidebar-nav__item-price');
  _navContact = document.querySelector('.sidebar-nav__item-contact');

  _introduction = document.querySelector('#introduction');
  _subject = document.querySelector('#subject');
  _content = document.querySelector('#content');
  _teacher = document.querySelector('#teacher');
  _price = document.querySelector('#price');
  _contact = document.querySelector('#contact');

  constructor() {
    this._addHandlerScroll();
  }

  shownSidebar() {
    this._parentElement.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this._parentElement.style.opacity = '1';
    }, 10);
  }
  hiddenSidebar() {
    document.body.style.overflow = 'auto';
    this._parentElement.style.opacity = '0';
    setTimeout(() => {
      this._parentElement.classList.add('hidden');
    }, 300);
  }

  addHandlerClickNav(handler) {
    this._parentElement.addEventListener('click', handler);
  }
  
  _addHandlerScroll() {
    window.addEventListener('scroll', this._addhandlerActive.bind(this));
  };

  _removeActive() {
    document.querySelector('.sidebar-nav__item--active').classList.remove('sidebar-nav__item--active');
  }

  _addhandlerActive() {
    let scrollValue = window.scrollY + 300;
    if (scrollValue >= +this._introduction.offsetTop) {
      this._removeActive();
      this._navIntroduction.classList.add('sidebar-nav__item--active');
    }
    if (scrollValue >= +this._subject.offsetTop) {
      this._removeActive();
      this._navSubject.classList.add('sidebar-nav__item--active');
    }
    if (scrollValue >= +this._content.offsetTop) {
      this._removeActive();
      this._navContent.classList.add('sidebar-nav__item--active');
    }
    if (scrollValue >= +this._teacher.offsetTop) {
      this._removeActive();
      this._navTeacher.classList.add('sidebar-nav__item--active');
    }
    if (scrollValue >= +this._price.offsetTop) {
      this._removeActive();
      this._navPrice.classList.add('sidebar-nav__item--active');
    }
    if (scrollValue >= +this._contact.offsetTop) {
      this._removeActive();
      this._navContact.classList.add('sidebar-nav__item--active');
    }
  };
}

export default new SidebarView();