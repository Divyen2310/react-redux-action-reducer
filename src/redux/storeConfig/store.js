import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// // Logger with default options
// import logger from 'redux-logger'

import rootReducer from "../reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // only user will be persisted
};
// console.log("process.env.NODE_ENV",process.env.NODE_ENV);
// reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

//Custom Logger For Redux action & dispatch
const logger = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhancer = composeEnhancers(applyMiddleware(logger, thunk));

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);
export { persistor, store };
