import React from 'react';

const Home = ({allProblems})=>{
  const countNoInFamiliarity = (level)=>{
    let count = 0;
    allProblems.forEach((problem)=>{
      if (problem.familiarity === level) {
        count++
      }
    })
    return count;
  }

  return (
    <div>
      <div>Total number of problems: {allProblems.length}</div>
      <div>Unfamiliar: {countNoInFamiliarity('Unfamiliar')}</div>
      <div>Familiar: {countNoInFamiliarity('Familiar')}</div>
      <div>Mastered: {countNoInFamiliarity('Mastered')}</div>
    </div>
  );
}

export default Home;