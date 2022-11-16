import React from 'react';

const categories = ['Arrays', 'Binary', 'Dynamic Programming', 'Graph', 'Interval', 'Linked List', 'Matrix', 'String', 'Tree', 'Heap'];
const levels = ['Easy', 'Medium', 'Hard'];
const durations = ['15', '20', '25', '30','35', '40', '45'];

const renderCats = ()=>{
  let result = categories.map((category)=>(
    <option value={category} key={category}>{category}</option>
  ))
  return result;
}

const renderLevels = ()=>{
  let result = levels.map((level)=>(
    <option value={level} key={level}>{level}</option>
  ))
  return result;
}

const renderDurations = ()=>{
  let result = durations.map((duration)=>(
    <option value={duration} key={duration}>{duration} min</option>
  ))
  return result;
}


export {renderCats, renderLevels, renderDurations};