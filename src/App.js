import React from 'react';

import {
   BrowserRouter as Router,
   Switch,
   Route,
  
  
 } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Header from './components/Header';
import News from './News';
import './App.css'


class App extends React.Component {
   render() {
      return (
         <Router>
      <div>
         <Header>
      
       </Header>
       <div className="content">
        <Switch>
        <Route path="/News">
        <News/>
        </Route>

          <Route path="/About">
        
            <About />
           
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
      )
   }
}
export default App;