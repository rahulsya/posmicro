import store from "./store";

// let currentAuth;
let currentCart;
let currentAuth;

function listener() {
  let previousCart = currentCart;
  let previousAuth = currentAuth;

  currentAuth = store.getState().auth;
  currentCart = store.getState().cart;

  if (currentCart !== previousCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
  if (currentAuth !== previousAuth) {
    localStorage.setItem("tokens", JSON.stringify(currentAuth));
  }
}

function listen() {
  // dengarkan perubahan store
  store.subscribe(listener);
}

export { listen };
