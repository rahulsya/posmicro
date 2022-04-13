import store from "./store";

// let currentAuth;
let currentCart;

function listener() {
  //   let previousAuth = currentAuth;
  let previousCart = currentCart;

  //   currentAuth = store.getState().auth;
  currentCart = store.getState().cart;

  if (currentCart !== previousCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
}

function listen() {
  // dengarkan perubahan store
  store.subscribe(listener);
}

export { listen };
