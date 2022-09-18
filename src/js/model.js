// import products from '../json/projects.json';

export let state = {
  product: {},
};

export const loadProducts = async function (id) {
  const res = await fetch('./json/projects.json');
  const products = await res.json();
  state.product = products.find(product => product.id == +id);
};
