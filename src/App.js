import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' exact component={Services}/>
          <Route path='/contact-us' exact component={ContactUs}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
