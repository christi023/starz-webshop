import React from 'react';
import HomeImg from '../../assets/shoe3.jpg';
// component
import Products from '../Products/Products';
// actions
//import { listProducts } from '../../actions/productActions';
//styles
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${HomeImg})` }}>
        <div className="banner">
          <h1>Welcome to Starz Webshop</h1>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
