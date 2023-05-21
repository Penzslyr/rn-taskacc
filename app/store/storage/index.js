import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { applyMiddleware, createStore } from "redux";

const persistConfig = {
  key: "redux",
  storage: AsyncStorage,
  blacklist: [],
  whitelist: [],
};

const middlewares = [thunk, __DEV__ && logger].filter(Boolean);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);