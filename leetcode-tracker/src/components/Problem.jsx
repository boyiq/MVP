import React from 'react';

const Problem = ({problem})=>{
  return (
    <div className="single-problem">
      <div>{problem.name}</div>
      <div>{problem.categroy}</div>
      <div>{problem.level}</div>
      <div>{problem.target_duration}</div>
      <div>{problem.last_duration}</div>
      <div>{problem.familiarity}</div>
    </div>
  );
}

export default Problem;