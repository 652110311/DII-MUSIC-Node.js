import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../features/Admin/products/reducers";
import summaryReducer from "../features/Admin/reducers";
export default configureStore({
  reducer: {
    products: productReducers,
    summary: summaryReducer,
  },
});
