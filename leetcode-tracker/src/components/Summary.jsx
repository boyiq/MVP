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
      <div className="summary">Total number of problems: {allProblems.length}</div>
      <div className="homecards">
        <div className="home-card">
          <div className="home-familiarity unfamiliar">Unfamiliar  <i class="fa-regular fa-circle-question"></i></div>
          <div className="home-number">{countNoInFamiliarity('Unfamiliar')}</div>
        </div>
        <div className="home-card">
          <div className="home-familiarity familiar">Familiar  <i class="fa-regular fa-face-laugh-squint"></i></div>
          <div className="home-number">{countNoInFamiliarity('Familiar')}</div>
        </div>
        <div className="home-card">
          <div className="home-familiarity mastered">Mastered  <i class="fa-solid fa-bolt"></i></div>
          <div className="home-number">{countNoInFamiliarity('Mastered')}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;