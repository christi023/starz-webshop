import React from 'react';
import Product from '../Product/Product';
import { Row, Col } from 'react-bootstrap';
//style
import './Products.css';
// json products
import products from '../../../src/products';

function Products() {
  return (
    <div className="products">
      <div className="inside-container">
        <h3>Products</h3>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Products;
