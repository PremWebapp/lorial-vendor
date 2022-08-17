import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import cartReducer from "./reducers/cartReducer";
import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";
import categeoryReducer from "./reducers/categeoryReducer";
import productReducer from "./reducers/productReducer";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cart: cartReducer,
  register: registerReducer,
  login: loginReducer,
  category: categeoryReducer,
  product:productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)