import React from 'react';
import axios from 'axios';

const Problem = ({problem})=>{
  return (
    <div className="single-problem">
      <div>{problem.name}</div>
      <div>{problem.category}</div>
      <div>{problem.level}</div>
      <div className="centered-item">{problem.target_duration}</div>
      <div className="centered-item">{problem.last_duration}</div>
      <div className="centered-item">{problem.familiarity}</div>
      <button>delete</button>
    </div>
  );
}

export default Problem;