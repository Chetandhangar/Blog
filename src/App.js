import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import AboutUS from './containers/AboutUS';
import Post from './containers/Post';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
    

        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUS} />
        <Route path="/contact-us"  component={ContactUS}/>
        <Route path="/post/:slug" component={Post} />

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
