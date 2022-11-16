import React from 'react';
import axios from 'axios';

const Problem = ({problem})=>{
  return (
    <div className="single-problem">
      <div>{problem.name}</div>
      <div>{problem.categroy}</div>
      <div>{problem.level}</div>
      <div>{problem.target_duration}</div>
      <div>{problem.last_duration}</div>
      <div>{problem.familiarity}</div>
      <button>delete</button>
    </div>
  );
}

export default Problem;