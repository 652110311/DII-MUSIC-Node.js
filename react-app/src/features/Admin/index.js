import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Home from "./Home";
import Dropdown from "./navigator/Dropdown";
import Summary from "./Summary";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import AddForm from "./products/AddForm";
import UpdateForm from "./products/UpdateForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./products/actions";
import GlobalStyle from "./GlobalStyle";

function Admin() {
  const options = [
    { value: "categories", label: "" },
    { value: "guitar", label: "Guitar" },
    { value: "bass", label: "Bass" },
    { value: "piano", label: "Piano" },
    { value: "drum", label: "Drum" },
    { value: "violin", label: "Violin" },
  ];

  const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option

  const handleOptionSelect = (option) => {
    if (option.value === "categories") {
      setSelectedOption(null); // Set selectedOption to null for the "Home" link
    } else if (option) {
      setSelectedOption(option);
    } else {
      setSelectedOption(null);
    }
  };

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      console.log("get");
      try {
        const products = await axios.get(`http://localhost:5000/products`);
        dispatch(fetchProducts(products.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <Container>
        <Summary />
        {products.length > 0 ? (
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/add-product"
              element={<AddForm addProduct={products} />}
            />
            <Route path="/update-product/:id" element={<UpdateForm />} />

            <Route
              path="/Guitar"
              element={
                <Home products={products} selectedOption={selectedOption} />
              }
            />
            <Route
              path="/Bass"
              element={
                <Home products={products} selectedOption={selectedOption} />
              }
            />
            <Route
              path="/Piano"
              element={
                <Home products={products} selectedOption={selectedOption} />
              }
            />
            <Route
              path="/Drum"
              element={
                <Home products={products} selectedOption={selectedOption} />
              }
            />
            <Route
              path="/Violin"
              element={
                <Home products={products} selectedOption={selectedOption} />
              }
            />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>
    </>
  );
}

export default Admin;
