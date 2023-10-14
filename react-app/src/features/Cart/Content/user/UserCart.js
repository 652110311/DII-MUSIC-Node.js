import Footer from "../../Footer";
import HeadContent from "../HeadContent";
import Order from "../Order";
import React, { Fragment, useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import axios from "axios";
import Topbar from "../../../home/Topbar";
import Navbar from "../../../Cart/NavBar";

function UserCart({ status, user, setUser, order, setOrder, className }) {
  const [total, setTotal] = useState(0);

  return (
    <>
      <Topbar user={user} setUser={setUser} />
      <Navbar />
      <div className={className}>
        <div className="main-container">
          <div className="main-content">
            <HeadContent userId={user.id} addminId={1} status={status} />

            {order.length > 0
              ? order.map((item) =>
                  item.statusUser == status &&
                  item.userId == user.id &&
                  user.id != 1 ? (
                    <Order
                      user={user}
                      order={item}
                      status={status}
                      total={total}
                      setTotal={setTotal}
                      setOrder={setOrder}
                    />
                  ) : user.id == 1 && item.statusAddmin == status ? (
                    <Order
                      user={user}
                      order={item}
                      status={status}
                      total={total}
                      setTotal={setTotal}
                      setOrder={setOrder}
                    />
                  ) : null
                )
              : null}
          </div>
        </div>
      </div>

      {order.length > 0
        ? order.map((item) =>
            item.statusUser == status &&
            item.userId == user.id &&
            status == "TO PAY" &&
            user.id != 1 ? (
              <Footer key={item.id} user={user} total={total} />
            ) : null
          )
        : null}
    </>
  );
}

export default styled(UserCart)`

  .main-container {
    display: flex;
    justify-content: center;
  }

  .main-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
  }
`;
