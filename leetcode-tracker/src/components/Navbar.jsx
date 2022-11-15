import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
  return (
    <div>
      <Link to="/">Summary</Link>
      <Link to="/problems">Problems</Link>
      <Link to='/new'>Add Problem</Link>
    </div>
  );
}

export default Navbar;