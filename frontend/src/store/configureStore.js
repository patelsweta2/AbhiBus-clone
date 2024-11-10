import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import apiMiddleware from "./middlewares/apiMiddleware";
import toastMiddleware from "./middlewares/toastMiddleware.js";

const storeConfigObj = {
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddlewares) => [
    ...getDefaultMiddlewares(),
    apiMiddleware,
    toastMiddleware,
  ],
};

const store = configureStore(storeConfigObj);

export default store;
