import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div style={{ textAlign: 'center', fontSize: '30px' }} className='jumbotron'>Welcome to Mel's Awesome Bar
    <Link to="/">Home</Link> |  <Link to="/new">Create New Liqior</Link>
    </div>

);
}

export default Header;
