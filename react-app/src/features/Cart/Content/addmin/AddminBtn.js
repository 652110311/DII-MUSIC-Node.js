import React, { Fragment, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Tracking from "../Tracking";
import { Link } from "react-router-dom";
import axios from "axios";

function AddminBtn({order,status,setOrder,className}) {

  const [addTracking,setAddTracking] = useState('');
  const [addTransport,setAddTransport] = useState('J&T');
  const [addressData,setAddressData] = useState([]);


  useEffect(() => {
    async function getAddress() {
      const getAddressData = await axios.get(`http://localhost:5000/address/${order.addressId}`);
      setAddressData(getAddressData.data)
    }
    getAddress();
  }, []);

  async function toConfirmOrder() {

    try {
      const getOrder = await axios.get(`http://localhost:5000/orders/${order.userId}/${order.orderId}`);
      const orderData = getOrder.data.order;  // Renamed to avoid naming conflict
      let { id, statusAddmin, ...withOutId } = orderData;
      await axios.put(`http://localhost:5000/orders/${id}`, { ...withOutId, statusAddmin: "TO SHIP" });
      
      const upDate = await axios.get(`http://localhost:5000/orders`)
      setOrder(upDate.data)
    } catch (error) {
      console.error('Error confirming order:', error);
    }
    
   
  }
 

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const getOrder = await axios.get(`http://localhost:5000/orders/${order.userId}/${order.orderId}`);
      const orderData = getOrder.data.order;  // Renamed to avoid naming conflict
      let { id, transport,tracking,statusUser,statusAddmin, ...withOutId } = orderData;
      await axios.put(`http://localhost:5000/orders/${id}`, { ...withOutId,transport:addTransport,tracking:addTracking,statusUser:"TO RECEIVE",statusAddmin:"TO RECEIVE" });

      const upDate = await axios.get(`http://localhost:5000/orders`)
      setOrder(upDate.data)

    } catch (error) {
      console.error('Error confirming order:', error);
    }
    
    
  }

  return (
    <>
      <div className={className}>

          {status === "TO PAY" ? (
            <>
              <div className="see-order-content">
                <button onClick={toConfirmOrder}>CONFIRM</button>
              </div>

              <div className="address">
                <p>FRISTNAME : {addressData.firstname}</p>
                <p>LASTNAME : {addressData.lastname}</p>
                <p>EMAIL : {addressData.email}</p>
                <p>MOBILE : {addressData.mobile}</p>
              </div>
              <div className="address-1">
               <p>ADDRESS : {addressData.address}</p>
                <p>CITY : {addressData.city}</p>
                <p>STATE : {addressData.state}</p>
                <p>ZIP : {addressData.zip}</p>
                </div>
              <div className="showimg">
              <img src={addressData.img}></img>
              </div>
            </>
          ) : status === "TO SHIP" ? (
            <>
            <form  onSubmit={onSubmit}>
              <div className="tracking">
                <div className="transport">
                  <select id="transport" name="transport" value={addTransport} onChange= {(event) =>{setAddTransport (event.target.value)}}>
                    <option value="J&T">J&T</option>
                    <option value="KERRY">KERRY</option>
                    <option value="THAI POST">THAI POST</option>
                    <option value="FRASH">FRASH</option>
                  </select>
                  <input className="input-track" value={addTracking} onChange= {(event) =>{setAddTracking (event.target.value)}} />
                </div>
                <div className="btn-track">
                  <button type="submit" className="btn">OK</button>
                </div>
              </div>
              </form>
              </>
          
          ) : status === "TO RECEIVE" ? (

              <Tracking order={order} />

          ) : null}
        </div>
      
    </>
  );
}


export default styled(AddminBtn)`
  * {
    font-weight: bold;
    color: black;
  }
  .see-order-content,
  .tracking {
    width: 1000px;
    height: 48px;
    background-color: #d19c97;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 60px;
  }
  select {
    height: 29.2px;
  }
  .btn {
    background-color: #ffffff;
    height: 29.2px;
    display: flex;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #000;
    margin-left: 10px;
  }
  .address {
    margin-top: 20px;
    margin-left: 50px;
    float: left;
    font-family: "Poppins", sans-serif;
    font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  .address-1 {
    margin-top: 20px;
    margin-left: 400px;
    font-family: "Poppins", sans-serif;
    font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  .showimg {
    margin-top: 20px;
    margin-left: 50px;
    clear: both; 
  }

  .address, .address-1 {
    flex-direction: column;
    
  }
`;

