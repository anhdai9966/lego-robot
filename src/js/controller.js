import * as model from './model.js';

import gototopView from './views/gototopView.js';
import headerView from './views/headerView.js';
import videoView from './views/videoView.js';
import featureView from './views/featureView.js';
import projectsView from './views/projectsView.js';
import projectView from './views/projectView.js';
import contactView from './views/contactView.js';
import sidebarView from './views/sidebarView.js';

const controlShownSidebar = function () {
  headerView.togglebtn()
  sidebarView.shownSidebar();
};
const controlHiddenSidebar = function () {
  headerView.togglebtn()
  sidebarView.hiddenSidebar();
};

const controlVideoView = function () {
  videoView.shownModel();
  videoView.render();
};

const controlProjectView = function (id) {
  projectsView.shownModel();
  model.loadProducts(id);
  projectsView.render(model.state.product, 1);
};

const controlBtnLeftRight = function (index) {
  console.log(index)
  projectsView.render(model.state.product, index);
}

const init = function () {
  headerView.addHandlerOpenSidebar(controlShownSidebar);
  headerView.addHandlerCloseSidebar(controlHiddenSidebar);
  sidebarView.addHandlerClickNav(controlHiddenSidebar);
  featureView.addHandlerClickPic(controlVideoView);
  projectView.addHandlerClickCard(controlProjectView);
  projectsView.addHandlerBtnLeft(controlBtnLeftRight);
  projectsView.addHandlerBtnRight(controlBtnLeftRight);
};
init();
