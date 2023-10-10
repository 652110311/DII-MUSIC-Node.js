import Footer from "../../Footer";
import HeadContent from "../HeadContent";
import Order from "../Order";
import React, { Fragment, useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import axios from "axios";
import Topbar from "../../../home/Topbar";
import Navbar from "../../../Cart/NavBar";


function UserCart({
  status,
  user,
  addmin,
  url,
  setUser,
  className
}) {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getCart() {
      const cart = await axios.get(`http://localhost:5000/cart`);
      setCart(cart.data)
      console.log(cart.data)
    }
    getCart();
  }, []);


  async function confirmOrder(userIdd, orderId) {
    try {
      const updatedCart = user.cart.map((item) => {
        if (item.orderId === orderId && item.userId === userIdd) {
          return { ...item, productStatus: "TO SHIP" };
        }
        return item;
      });
      setUser({ ...user, cart: updatedCart });

      const { _id, cart, ...itemWithOutId } = user;
      await axios.put(`${url}/${user._id}`, {
        ...itemWithOutId,
        cart: updatedCart,
      });
    } catch (error) {
      console.error("Error delete cart:", error);
    }
  }


  async function addTrack(userIdd, orderId, transport, track) {
    const response = await axios.get(`${url}/${userIdd}`);

    try {
      const updatedCart = response.data.cart.map((item) => {
        if (item.orderId === orderId) {
          return { ...item, transport, track, productStatus: "TO RECEIVE" };
        }
        return item;
      });

      const updatedCartA = user.cart.map((item) => {
        if (item.orderId === orderId && item.userId === userIdd) {
          return { ...item, transport, track, productStatus: "TO RECEIVE" };
        }
        return item;
      });

      if (updatedCartA) {
        const { _id, cart, ...itemWithOutId } = user;
        setUser({ ...user, cart: updatedCartA });
        await axios.put(`${url}/${user._id}`, {
          ...itemWithOutId,
          cart: updatedCartA,
        });
      }

      const { _id, cart, ...itemWithOutId } = response.data;
      await axios.put(`${url}/${userIdd}`, {
        ...itemWithOutId,
        cart: updatedCart,
      });
    } catch (error) {
      console.error("Error delete cart:", error);
    }
  }

  


  return (
    
        <>
        <Topbar user={user} setUser={setUser}/>
        <Navbar/>
        <div className={className}>
          <div className="main-container">
            <div className="main-content">
              <HeadContent userId={user.id} addminId={addmin.id} status={status} />
              {cart.length > 0 && status == "TO PAY" ? (
                      <>
                      <Order
                        user={user}
                        userId={user.id}
                        addminId={addmin.id}
                        order={cart}
                        setCart={setCart}
                        status={status}
                        confirmOrder={confirmOrder}
                        addTrack={addTrack}
                        />

                        </>
                        
                    ) : (
                    <>
                      
                      {/* <Order
                        user={user}
                        userId={user.id}
                        addminId={addmin.id}

                        status={status}
                        editCart={editCart}
                        deleteCart={deleteCart}

                        confirmOrder={confirmOrder}
                        addTrack={addTrack}
                        /> */}

                        </>
                  )}
            </div>
          </div>
          </div>

          {cart.length > 0 && status == "TO PAY" && user.id!==addmin.id ? (
                  <Footer
                    key={user.id}
                  />
                ) : null
              
            }
        </>
     
      
  );
}

export default styled(UserCart)`

  .main-container{
    display: flex;
    justify-content: center;
  }

  .main-content{
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
  }

`
