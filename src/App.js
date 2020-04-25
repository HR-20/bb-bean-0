import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Beans from './components/pages/Beans';
import Catalog from './components/pages/Catalog';
import About from './components/pages/About';
import Search from './components/layout/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" exact={true} component={Home} />
          <Route path="/Beans" exact={true} component={Beans} />
          <Route path="/Community" exact={true} component={Catalog} />
          <Route path="/About" exact={true} component={About} />
          <Route path="/Search" exact={true} component={Search} />
        </div>
      </div>
    </Router>
  );
}

export default App;
