import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './Components/Header';
import Home from './Components/Home/Home';
import About from './Components/About';
import Product from './Components/Product/Product';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product/:id" component={Product} />

          <Route path="/cart/:id?" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
