import React, {useState} from 'react';
import {renderCats} from '../helpers/renderLists.js';
import filterProblems from '../helpers/filterProblems.js';

const Practice = ({allProblems})=>{
  const [category, setCategory] = useState('all');
  const [firstLoad, setFirstLoad] = useState(true);
  const [selectedProblems, setSelectedProblems] = useState(allProblems);

  if (firstLoad) {
    return (
      <div>
        <form>
          <label>Pick a category</label>
          <select className="dropdown-list" onChange={(event)=>{
            setCategory(event.target.value);
            setSelectedProblems(filterProblems(event.target.value, allProblems))
          }}
        >
            <option value='all'>All</option>
            {renderCats()}
          </select>
          <button onClick={()=>{setFirstLoad(false);}}>OK</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div className="flashcard">
        <div>{allProblems[67].name}</div>
        <a href={allProblems[67].link} target="_blank" rel="noopener noreferrer">Go to problem</a>
      </div>
      <div>
        <form>
          <label>Current Attempt Duration</label>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <button>Unfamiliar</button>
        <button>Familiar</button>
        <button>Mastered</button>
      </div>
      <button>Before</button>
      <button>Next</button>
    </div>
  );
}

export default Practice;