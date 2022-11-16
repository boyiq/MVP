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
      <button className="nav-link" onClick={(event)=>{
        event.preventDefault();
        handleClick('/')
      }}>Summary</button>
      <button className="nav-link" onClick={(event)=>{
        event.preventDefault();
        handleClick('/problems')
      }}>Problems</button>
      <button className="nav-link" onClick={(event)=>{
        event.preventDefault();
        handleClick('/new')
      }}>Add Problems</button>
{/*       <Link className="nav-link" to="/">Summary</Link>
      <Link className="nav-link" to="/problems">Problems</Link>
      <Link className="nav-link" to='/new'>Add Problem</Link> */}
    </div>
  );
}

export default Navbar;