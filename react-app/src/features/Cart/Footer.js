import React, { Fragment, useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";


function Footer({ user,total,className }) {

  // useEffect(() => {
  //   async function getProduct() {
  //     const getOrder = await axios.get(`http://localhost:5000/orders/${user.id}/${user.orderId}`);
  //     setTotal(getOrder.data.order.total)
  //   }
  //   getProduct();
  // }, []);
  
  return (
    <>
      <div className={className}>
        <div className="footer-container">
          <div className="footer-content">
            <div className="content-l">ORDER</div>
            <div className="content-r">
              <div>TOTAL&nbsp;&nbsp;&nbsp;&nbsp;${total}</div>
              <div>
                <button><Link to="/address">CHECKOUT</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default styled(Footer)`
  * {
    font-weight: bold;
    color: black;
  }

  .footer-container {
    display: flex;
    justify-content: center;
  }
  .footer-content {
    background-color: #d19c97;
    width: 1129px;
    height: 69px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
  }
  .content-r{
    display: flex;
    width: 300px;
    justify-content: space-between;
    padding-right: 60px;
  }
  .content-l{
    padding-left: 60px;
  }
  .button{
    background-color: #EDF1FF;
  }
`;
