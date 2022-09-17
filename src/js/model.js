import products from '../json/projects.json';

export let state = {
  product: {},
}

export const loadProducts = function (id) {

  state.product = products.find(product => product.id == +id);
}