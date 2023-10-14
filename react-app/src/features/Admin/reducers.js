// reducers.js
import { createReducer } from "@reduxjs/toolkit";
import { setSummaryData } from "./action";

const initialState = {
  totalSales: 0,
  totalOrders: 0,
  productsInStock: 0,
  totalCustomers: 0,
};

export default createReducer(initialState, {
  [setSummaryData]: (state, action) => {
    return { ...state, ...action.payload };
  },
});
