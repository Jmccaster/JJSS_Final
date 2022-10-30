// APP.js
import "./App.css";
import NewOrderPage from "./pages/NewOrderPage";
import AuthPage from "./pages/AuthPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Detail from "./pages/Detail";
import Allproducts from "./pages/Allproducts";
import CartPage from "./pages/CartPage";
import ProductCarousel from "././Components/ProductCarousel";
import { Breadcrumb } from "react-bootstrap";

import SearchPage from "./pages/SearchPage";
import SignupPage from "./pages/SignupPage";

// Create App component.
function App() {
  // Variable to hold the state of the component.
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([]);
  const [gender, setGender] = useState({});

  // search page products
  const [searchProducts, setSearchProducts] = useState(null);

  const params = useParams();
  const genderparams = params.gender;
  useEffect(() => {
    setGender(genderparams);
  }, []);

  return (
    <div className="App">
      <>
        <NavBar
          user={user}
          setUser={setUser}
          cart={cart}
          setGender={setGender}
          setSearchProducts={setSearchProducts}
        />
        <Routes>
          <Route path="/" element={<Navigate replace to="/api/products" />} />

          <Route path="/orders/new/:id" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route
            path="/login"
            element={<AuthPage setUser={setUser} user={user} />}
          />
          <Route
            path="/signup"
            element={<SignupPage setUser={setUser} user={user} />}
          />
          <Route
            path="/api/products"
            element={<Allproducts setCart={setCart} cart={cart} />}
          />
          <Route
            path="/api/products/:gender"
            element={<Detail setCart={setCart} cart={cart} gender={gender} />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} setCart={setCart} />}
          />
          {/* search page route */}
          <Route
            path="/api/products/search/:searchTerm"
            element={
              <SearchPage
                setCart={setCart}
                cart={cart}
                searchTerm={searchProducts}
              />
            }
          />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
