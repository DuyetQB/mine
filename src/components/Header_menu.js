import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
const Menu = ({ collapsed }) => {{

     
          const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
        
        
        return(
          <Fragment>
          <div className="nav-toggle" onClick={() => setIsCollapsed(!isCollapsed)} >
        
      
          <svg  xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{width:"40px",height:"40px"}} >
         
          
  <g>
    <g>
      <path d="M467,61H165c-24.813,0-45,20.187-45,45s20.187,45,45,45h302c24.813,0,45-20.187,45-45S491.813,61,467,61z M467,121H165    c-8.271,0-15-6.729-15-15s6.729-15,15-15h302c8.271,0,15,6.729,15,15S475.271,121,467,121z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M467,211H165c-24.813,0-45,20.187-45,45s20.187,45,45,45h302c24.813,0,45-20.187,45-45S491.813,211,467,211z M467,271H165    c-8.271,0-15-6.729-15-15s6.729-15,15-15h302c8.271,0,15,6.729,15,15S475.271,271,467,271z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M467,361H165c-24.813,0-45,20.187-45,45s20.187,45,45,45h302c24.813,0,45-20.187,45-45S491.813,361,467,361z M467,421H165    c-8.271,0-15-6.729-15-15s6.729-15,15-15h302c8.271,0,15,6.729,15,15S475.271,421,467,421z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M45,61C20.187,61,0,81.187,0,106s20.187,45,45,45s45-20.187,45-45S69.813,61,45,61z M45,121c-8.271,0-15-6.729-15-15    s6.729-15,15-15s15,6.729,15,15S53.271,121,45,121z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M45,211c-24.813,0-45,20.187-45,45s20.187,45,45,45s45-20.187,45-45S69.813,211,45,211z M45,271c-8.271,0-15-6.729-15-15    s6.729-15,15-15s15,6.729,15,15S53.271,271,45,271z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M45,361c-24.813,0-45,20.187-45,45s20.187,45,45,45s45-20.187,45-45S69.813,361,45,361z M45,421c-8.271,0-15-6.729-15-15    s6.729-15,15-15s15,6.729,15,15S53.271,421,45,421z"/>
    </g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>
  
          </div>

            <ul  id="toggleMenu" className={`toggle-menu ${isCollapsed ? 'hiddenClass' : 'showClass'}`}
        aria-expanded={isCollapsed}>
            <li>
            <Link to="/">Home</Link></li>
         
            <li><Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to="/news">News</Link></li>
        </ul>
        </Fragment>
        )
      
        }}
    
export default Menu ;