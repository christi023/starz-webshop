import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product, addToCart, isInCart } = props;

  return (
    <div className="product">
      <div className="box-img">
        <Link to={`/product/someID}`}>
          <img src={product.img} alt="" />
        </Link>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <h4>${product.price}</h4>
      </div>

      <div className="product-btn">
        <Link to={`/product/someID`}>
          <button>View Item</button>
        </Link>
        <button onClick={addToCart}>Add to cart</button>
      </div>
      <div className={isInCart ? 'inCart newInCart' : 'inCart '}>
        <span>Already in cart</span>
      </div>
    </div>
  );
}
