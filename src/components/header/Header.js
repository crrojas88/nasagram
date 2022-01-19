import React from 'react';
import './header.css';

const Header = () => {
    return(
    
      <header className="app__header">
        <nav className="app__headerWrapper">
          <img
            src="https://i.ibb.co/bX9cjL8/nasagram-logo.png" 
            alt="Nasagram logo"
          />
          {/* <button className="text__button">Logout</button> */}
          {/* <nav className="app__headerButtons">
            <button className="primary__button">Log in</button>
            <button className="text__button">Sign up</button>
          </nav> */}
        </nav>
      </header>
    
    )
}

export default Header