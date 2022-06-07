import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./Cart/reducer";
import categoriesReducer from "./Categories/reducer";
import productsReducer from "./Products/reducer";
import authReducer from "./Auth/reducer";
// debug mode
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  manageProduct: productsReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
