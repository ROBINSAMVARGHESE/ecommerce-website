import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/carousels/Home';
import About from './Component/about/About';
import Contact from './Component/contact/Contact';
import Footer from './Component/footer/Footer';
import Navbardesign from './Component/header/Navbar';
import Login from './Component/login/Login';
import Cart from './Component/cart/Cart';
import Products from './Component/products/Products';
import Product from './Component/products/Product';
import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbardesign />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id'element={<Product/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
