import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
  let navigate = useNavigate();

  const handleClick = (route)=>{
    navigate(route, {replace:true})
  }

  return (
    <div className="navbar">
      <div className="nav-link">
        <Link to="/">Summary</Link>
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