import React, { Component } from 'react';
import Api from './components/Api';
import Nav from './components/Nav';
import About from './components/About';
import Arrays from './components/Arrays';


import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {

  
    


  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Api" component={Api} />
          <Route path="/Arrays" component={Arrays} />
          <Route path="/about" component={About} />
       
        </Switch>
    </div>
    </Router>
  ) 
}
}


const homeStyle = {
  backgroundColor: "grey"
}

const Home = () => (

  <div>
    <h1 style={homeStyle}>
      Home Page 
    </h1>
  </div>

);

export default App;
