import React, { Component } from 'react';
import {
    Link,
   
  } from "react-router-dom";
  import Logo from '../assest/my-logo.png';
class Header extends Component{
    render(){
        return(

            <div className = "header">
    <div className = "logo">
        <img src={Logo} alt="logo"/>
    </div>
        <ul>
            <li>
            <Link to="/">Home</Link></li>
         
            <li><Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to="/news">News</Link></li>
        </ul>
            </div>

        )
    }
}

export default Header;