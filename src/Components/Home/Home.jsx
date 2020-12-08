import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HomeImg from '../../assets/shoe3.jpg';
// component
import Product from '../Product/Product';
// json products
import products from '../../../src/products';
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
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
