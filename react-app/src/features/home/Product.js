import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Product({item,user,setUser,setOrder}) { 

    const productImage=require(`../../assets/${item.imageURL}`);

    async function addCart() {
      try {
        
        const getCart = await axios.get(`http://localhost:5000/carts`);
        const cart = getCart.data

        const orderInCart = cart.find((order) => order.productId == item.id && order.userId == user.id);

        if (orderInCart) {

          let {id,quantity,...withOutId} = orderInCart
          await axios.put(`http://localhost:5000/carts/${id}`,{...withOutId,quantity:quantity+1})
          
          
        } else {
          // ถ้าไม่มีสินค้าใน cartToPay ให้สร้างตะกร้าใหม่
          const newOrder = { userId:user.id,productId:item.id, quantity:1,orderId:user.orderId};
          await axios.post(`http://localhost:5000/carts`, newOrder);
                    
        }

        const getOrder = await axios.get(`http://localhost:5000/orders/${user.id}/${user.orderId}`);
        const order = getOrder.data.order
        let {id,total,...withOutId} = order
        await axios.put(`http://localhost:5000/orders/${id}`, {...withOutId,total:total+item.price});

        const upDate = await axios.get(`http://localhost:5000/orders`)
        setOrder(upDate.data)
        
    
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
    

 
  return (
    

        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={productImage}  alt=""/>
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            
                  <h6 className="text-truncate mb-3">{item.name}</h6>
                  <div className="d-flex justify-content-center">
                      <h6>{item.price}</h6><h6 className="text-muted ml-2"><del>฿15000</del></h6>
                  </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
        <Link to={`/product/${item.id}`} className="btn btn-sm text-dark p-0">
          <i className="fas fa-eye text-primary mr-1"></i>View Detail
        </Link>
        <span onClick={addCart} className="btn btn-sm text-dark p-0">
          <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart
        </span>
      </div>
          </div>
      </div>     



);
}

export default Product;
