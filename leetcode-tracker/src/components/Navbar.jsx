import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{

  return (
    <div className="navbar">
      <div className="nav-link">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-link">
        <Link to="/problems">Problems</Link>
      </div>
      <div className="nav-link">
        <Link to='/new'>Add Problem</Link>
      </div>
    </div>
  );
}

export default Navbar;