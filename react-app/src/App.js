import React, { useState, useEffect, useContext } from "react";
import Home from "./features/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShopDetail from "./features/home/product/ShopDetail";
import axios from "axios";
import Login from "./features/login/Login";
import Address from "./features/payment/Address";
import Create from "./features/login/Create";
import UserCart from "./features/Cart/Content/user/UserCart";
import Admin from "./features/Admin";//

//testcommit

function App() {
  const url = `http://localhost:5000/users`;;
  const [user, setUser] = useState("");
  const [products, setProducts] = useState([]);
  const [order ,setOrder] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(`http://localhost:5000/products`);
      const orders = await axios.get(`http://localhost:5000/orders`);
      setOrder(orders.data)
      setProducts(products.data);
      
    }
    getProducts();
  }, [user]);

  return (
    <>
      {products.length > 0 ? (
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                user={user}
                setUser={setUser}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ShopDetail
                products={products}
                user={user}
                setUser={setUser}
                url={url}
              />
            }
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} url={url} />}
          />
          <Route
            path="/address"
            element={
              <Address
                user={user}
                setUser={setUser}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/create-account"
            element={
              <>
                <Create url={url} />
              </>
            }
          />
          <Route
            path="/ToPay"
            element={
              <UserCart
                status={"TO PAY"}
                user={user}
                setUser={setUser}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/ToShip"
            element={
              <UserCart
                status={"TO SHIP"}
                user={user}
                setUser={setUser}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/ToReceive"
            element={
              <UserCart
                status={"TO RECEIVE"}
                user={user}
                setUser={setUser}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route path="/Admin/*" element={<Admin />} />
        </Routes>
      ) : (
        <div>Loading products....</div>
      )}
    </>
  );
}

export default App;
