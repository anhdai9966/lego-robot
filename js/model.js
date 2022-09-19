// import products from '../json/projects.json';
import { AJAX } from './helpers.js';
import { API_URL } from './config.js';

export let state = {
  product: {},
  res: {},
};

export const loadProducts = async function (id) {
  const res = await fetch('./json/projects.json');
  const products = await res.json();
  state.product = products.find(product => product.id == +id);
};

export const postRegister = async function (data) {
  try {
    const id = window.location.href.split('#')[0];

    const req = {
      FullName: data.name,
      Email: data.email,
      Phone: data.phoneNumber,
      Note: data.note,
      Link: id,
      ItemId: "PFqWCBgY",
    };
    const res = await AJAX(API_URL, req);
    console.log(res);

  } catch (error) {
    throw error;
  }
  

  // let myJSON = JSON.stringify(req);

  // $.ajax({
  //   url: "https://techmaster.vn/submit-advisory",
  //   type: "POST",
  //   contentType: "application/json; charset=utf-8",
  //   data: myJSON,
  //   dataType: "json",
  //   success: function (data) {
  //     name.value = phone.value = email.value = note.value = "";
  //     name.classList.remove("is-valid");
  //     phone.classList.remove("is-valid");
  //     email.classList.remove("is-valid");
  //     success.style.display = "inline-block";
  //     error.style.display = "none";
  //   },
  //   error: function (result) {
  //     success.style.display = "none";
  //     error.style.display = "inline-block";
  //     msg.innerText = result.responseJSON.message;
  //   },
  // });
}
