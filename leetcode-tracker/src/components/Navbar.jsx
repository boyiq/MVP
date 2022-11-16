import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{

  return (
    <div className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/problems">Problems</Link>
      <Link className="nav-link" to="/practice">Practice</Link>
      <Link className="nav-link" to="/new">Add Problem</Link>
    </div>
  );
}

export default Navbar;