import React, {useState} from 'react';
import Problem from './Problem.jsx'
import {renderCats, renderFamiliarities} from '../helpers/renderLists.js';

const Problems = ({allProblems, setAllProblems})=>{
  const [filter, setFilter]=useState('all');
  const [filter2, setFilter2]=useState('all');
  const renderFilters = ()=>{
    return (
      <div>
        <select className="dropdown-list" onChange={(event)=>{ setFilter(event.target.value)}}>
          <option value="all">All</option>
          {renderCats()}
        </select>
        <select className="dropdown-list" onChange={(event)=>{ setFilter2(event.target.value)}}>
          <option value="all">All</option>
          {renderFamiliarities()}
        </select>
      </div>
    )
  }

  const renderTitle = ()=>{
    return (
      <div className="title">
        <div>Name</div>
        <div>Cateory</div>
        <div>Difficulty Level</div>
        <div>Target Duration</div>
        <div>Last attempt Duration</div>
        <div>familiarity</div>
        <div> </div>
      </div>
    )
  }
  if (filter === 'all' && filter2 === 'all') {
    return (
      <div>
        {renderFilters()}
        <div className="problem-list">
          {renderTitle()}
          {allProblems.map((problem)=>(
            <Problem key={problem.name} problem={problem} allProblems={allProblems} setAllProblems={setAllProblems}/>
          ))}
        </div>
      </div>
    );
  } else if (filter === 'all' && filter2 !== 'all') {
    return (
      <div>
        {renderFilters()}
        <div className="problem-list">
          {renderTitle()}
          {allProblems.map((problem)=>{
            if (problem.familiarity === filter2)
            return (
              <Problem key={problem.name} problem={problem} allProblems={allProblems} setAllProblems={setAllProblems}/>
            )
          })}
        </div>
      </div>
    )
  } else if (filter2 === 'all' && filter !== 'all') {
    return (
      <div>
        {renderFilters()}
        <div className="problem-list">
          {renderTitle()}
          {allProblems.map((problem)=>{
            if (problem.category === filter)
            return (
              <Problem key={problem.name} problem={problem} allProblems={allProblems} setAllProblems={setAllProblems}/>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        {renderFilters()}
        <div className="problem-list">
          {renderTitle()}
          {allProblems.map((problem)=>{
            if (problem.familiarity === filter2 && problem.category === filter)
            return (
              <Problem key={problem.name} problem={problem} allProblems={allProblems} setAllProblems={setAllProblems}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Problems;