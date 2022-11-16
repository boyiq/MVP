import React from 'react';
import axios from 'axios';

const Problem = ({problem, allProblems, setAllProblems})=>{
  const deleteProblem = (x)=>{
    axios.delete('/problems', { data: x })
      .then(()=>{
        axios.get('/problems')
        .then((results)=>{
          setAllProblems(results.data)
        })
      })
  }

  return (
    <div className="single-problem">
      <div>{problem.name}</div>
      <div>{problem.category}</div>
      <div>{problem.level}</div>
      <div className="centered-item">{problem.target_duration}</div>
      <div className="centered-item">{problem.last_duration}</div>
      <div className="centered-item">{problem.familiarity}</div>
      <button onClick={(event)=>{
        event.preventDefault();
        deleteProblem(problem);
      }}>delete</button>
    </div>
  );
}

export default Problem;