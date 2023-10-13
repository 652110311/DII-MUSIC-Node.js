import React, { Fragment, useState, useEffect, useReducer } from "react";
import Item from "./Item";
import SumTotal from "../SumTotal";
import Tracking from "./Tracking";
import AddminBtn from "./addmin/AddminBtn";
import styled from "styled-components";
import axios from "axios";

function Order({ user, order, status, total, setTotal,setOrder, className }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getCart() {
      const getCart = await axios.get(`http://localhost:5000/carts`);
      setCart(getCart.data);
      setTotal(order.total)
    }
    getCart();
  }, []);

  return (
    <>
      <div className={className}>
        <ul className="order-list">
          {cart.length > 0
            ? cart.map((item) => {
                if (
                  item.orderId === order.orderId &&
                  item.userId === order.userId 
                 
                ) {
                  return (
                    <Item
                      key={item.id}
                      user={user}
                      item={item}
                      status={status}
                      setCart={setCart}
                      total={total}
                      setTotal={setTotal}
                    />
                  );
                }
                

                return null; // Return null for items that don't meet the conditions
              })
            : null}

          {user.id == 1 ? (
            <>
              <SumTotal total={order.total} />
              <AddminBtn order={order} status={status} setOrder={setOrder} />
            </>
          ) : status !== "TO PAY" && user.id !== 1 ? (
            <SumTotal total={order.total} />
          ) : status === "TO RECEIVE" ? (
            <Tracking order={order} />
          ) : null}
        </ul>
      </div>
    </>
  );
}

export default styled(Order)`
  .order-list {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #666;
    width: 1000px;
    margin-top: 14px;
    padding-top: 14px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;
