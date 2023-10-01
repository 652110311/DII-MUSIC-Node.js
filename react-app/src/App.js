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

function App() {
  const urlProduct = `https://crudcrud.com/api/eaba865638ff4ee49f03d314906b56ab/product/65192952b987ad03e876d609`;
  const url = `https://crudcrud.com/api/eaba865638ff4ee49f03d314906b56ab/user`;
  const urlAddmin = `https://crudcrud.com/api/eaba865638ff4ee49f03d314906b56ab/user/65192a4bb987ad03e876d60a`;
  const [user, setUser] = useState("");
  const [addmin, setAddmin] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(urlProduct);
      const addmin = await axios.get(urlAddmin);
      setAddmin(addmin.data);
      setProducts(products.data.product);
      console.log(user);
    }
    getProducts();
  }, []);

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
                url={url}
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
                url={url}
                urlAddmin={urlAddmin}
                addmin={addmin}
                products={products}
              />
            }
          />
          <Route
            path="/create-account"
            element={
              <>
                {" "}
                <Create url={url} />{" "}
              </>
            }
          />
          <Route
            path="/ToPay"
            element={
              <UserCart
                status={"TO PAY"}
                user={user}
                addmin={addmin}
                products={products}
                url={url}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/ToShip"
            element={
              <UserCart
                status={"TO SHIP"}
                user={user}
                addmin={addmin}
                products={products}
                url={url}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/ToReceive"
            element={
              <UserCart
                status={"TO RECEIVE"}
                user={user}
                addmin={addmin}
                products={products}
                url={url}
                setUser={setUser}
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
