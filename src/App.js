import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './Components/Navbar/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
//import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
