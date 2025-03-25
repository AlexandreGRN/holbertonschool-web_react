import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard hello</h1>
    </div>
  );
}

export default Header;