import React, { useState } from 'react';
import axios from 'axios';
import generateLink from '../helpers/generateLink.js'
import {renderCats, renderLevels, renderDurations} from '../helpers/renderLists.js'

const New = ({allProblems, setAllProblems})=>{
  const [newProblem, setNewProblem] = useState({});

  const handleSubmit = (problem)=>{
    console.log(problem);
/*     axios.post('/problems', problem)
      .then(()=>{
        axios.get('/problems')
      })
      .then((results)=>{
        setAllProblems(results.data)
      }) */
  }

  return (
    <div>
      <form id="new-problem-form" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit(newProblem)
      }}>
        <label>Problem name</label>
        <input type="text" onChange={(event)=>{
          let copy = {...newProblem};
          copy.name = event.target.value;
          copy.link = generateLink(event.target.value)
          copy.familiarity = 'Unfamiliar'
          setNewProblem(copy)
        }}></input>
        <label>Category</label>
        <select
          className="dropdown-list"
          onChange={(event)=>{
            let copy = {...newProblem};
            copy.category = event.target.value;
            setNewProblem(copy)
          }}
        >
          {renderCats()}
        </select>
        <label>Difficulty level</label>
        <select
          className="dropdown-list"
          onChange={(event)=>{
            let copy = {...newProblem};
            copy.level = event.target.value;
            setNewProblem(copy)
          }}
        >
          {renderLevels()}
        </select>
        <label>Target Duration</label>
        <select
          className="dropdown-list"
          onChange={(event)=>{
            let copy = {...newProblem};
            copy.target_duration = event.target.value;
            setNewProblem(copy)
          }}
        >
          {renderDurations()}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default New;