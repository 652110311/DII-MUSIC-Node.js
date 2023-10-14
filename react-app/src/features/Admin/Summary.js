import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import { setSummaryData } from "./action";

function Summary({ className }) {
  const summaryData = useSelector((state) => state.summary);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/summary")
      .then((response) => {
        const { totalCustomers, totalOrders, totalSales, totalProducts } =
          response.data;

        // ส่งข้อมูลลงใน Redux store
        dispatch(
          setSummaryData({
            totalSales,
            totalOrders,
            productsInStock: totalProducts,
            totalCustomers,
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching summary data:", error);
      });
  }, [dispatch]);

  return (
    <>
      <div className={className}>
        <div className="content-summary">
          <div className="summary-item">
            <div className="summary-text">
              <h1 className="fa fa-coins text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Total Sales</h5>
            </div>
            <h2 className="sales">{summaryData.totalSales}</h2>
          </div>
          <div className="summary-item">
            <div className="summary-text">
              <h1 className="fa fa-shopping-cart text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">All Orders</h5>
            </div>
            <h2 className="orders">{summaryData.totalOrders}</h2>
          </div>
          <div className="summary-item">
            <div className="summary-text">
              <h1 className="fas fa-tag text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Products in Stock</h5>
            </div>
            <h2 className="sales">{summaryData.productsInStock}</h2>
          </div>
          <div className="summary-item">
            <div className="summary-text">
              <h1 className="fa fa-user text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">All Customers</h5>
            </div>
            <h2 className="sales">{summaryData.totalCustomers}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

Summary.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(Summary)`
  padding-top: 3rem;
  width: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: block;

  .content-summary {
    padding-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .summary-item {
    padding-bottom: 0.25rem;
    max-width: 25%;
    position: relative;
    width: 20%;
    padding-right: 15px;
    padding-left: 15px;
    border: 1px solid #edf1ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .summary-text {
    padding: 30px;
    display: flex;
    align-items: center;
  }

  .fa {
    font-weight: 900;
    font-family: "Font Awesome 5 Free";
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
  }

  .text-primary {
    color: #d19c97 !important;
  }

  .mr-3,
  .mx-3 {
    margin-right: 1rem !important;
  }

  .m-0 {
    margin: 0 !important;
  }

  .font-weight-semi-bold {
    font-weight: 600;
  }

  h5,
  .h5 {
    padding-left: 20px;
    font-size: 1.25rem;
    color: #1c1c1c;
    display: block;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2 {
    margin: 0;
    margin-bottom: 10px;
    color: #f77a6e;
  }
`;
