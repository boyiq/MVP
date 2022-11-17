import React, {useState} from 'react';
import {renderCats} from '../helpers/renderLists.js';
import filterProblems from '../helpers/filterProblems.js';
import generateRandom from '../helpers/generateRandom.js';
import {markStatus, updateDur} from '../helpers/updateProblem.js';

const Practice = ({allProblems, setAllProblems})=>{
  const [category, setCategory] = useState('all');
  const [firstLoad, setFirstLoad] = useState(true);
  const [selectedProblems, setSelectedProblems] = useState(allProblems)
  const [mode, setMode] = useState('review');
  const [flashcards, setFlashcards] = useState(generateRandom(allProblems, mode));
  const [currCardIndex, setCurrCardIndex]=useState('');
  const [lastDur, setLastDur] = useState('');

  const renderFamiliarity = (cat) => {
    if (cat === 'Unfamiliar') {
      return (
        <div id="info-cat" style={{backgroundColor: "#FF7D7D", color:"#372948"}}>{flashcards[currCardIndex].familiarity}</div>
      )
    } else if (cat === 'Familiar') {
      return (
        <div id="info-cat" style={{backgroundColor: "#FAD6A5", color:"#372948"}}>{flashcards[currCardIndex].familiarity}</div>
      )
    } else if (cat === 'Mastered') {
      return (
        <div id="info-cat" style={{backgroundColor: "#B6E388", color:"#372948"}}>{flashcards[currCardIndex].familiarity}</div>
      )
    }
  }

  if (firstLoad) {
    return (
      <div>
        <form className="practice-selection">
          <div className="selection">
            <label className="label">Pick a category</label>
            <select className="dropdown-list" onChange={(event)=>{
              setCategory(event.target.value);
              if (event.target.value === 'all') {
                setSelectedProblems(allProblems);
                setFlashcards(generateRandom(allProblems, mode));
              } else {
                setSelectedProblems(filterProblems(event.target.value, allProblems))
                setFlashcards(generateRandom(filterProblems(event.target.value, allProblems), mode));
              }
            }}
            >
              <option value='all'>All</option>
              {renderCats()}
            </select>
          </div>
          <div className="selection">
            <label className="label">Pick a mode</label>
            <select className="dropdown-list" onChange={(event)=>{
              setMode(event.target.value);
              setFlashcards(generateRandom(selectedProblems, event.target.value));
            }}>
              <option value="review">Review</option>
              <option value="grind">Grind</option>
            </select>
          </div>
          <button onClick={()=>{
            setFirstLoad(false);
            setCurrCardIndex(0);
          }}>OK</button>
        </form>
      </div>
    )
  }

  return (
    <div className="flashcard">
      <div className="card-info">
        <div id="info-name">{flashcards[currCardIndex].name}</div>
        <div id="info-cat">{flashcards[currCardIndex].category}</div>
        {renderFamiliarity(flashcards[currCardIndex].familiarity)}
        <div id="info-target">Aim to solve in {flashcards[currCardIndex].target_duration} min</div>
        <div>Last time you spent {flashcards[currCardIndex].last_duration} min solving the problem</div>
        <a id="go-to-leetcode" href={flashcards[currCardIndex].link} target="_blank" rel="noopener noreferrer">Go to problem</a>
      </div>
      <div>
        <form className="card-duration" onSubmit={(event)=>{
          event.preventDefault();
          updateDur(flashcards[currCardIndex], parseInt(lastDur), setAllProblems)
        }}>
          <label>Current Attempt Duration:</label>
          <input type="text" onChange={(event)=>{setLastDur(event.target.value)}}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="status-section">
        <button className="mark-status unfamiliar" onClick={()=>{
          markStatus(flashcards[currCardIndex], 'Unfamiliar', setAllProblems);
        }}>Unfamiliar  <i class="fa-regular fa-circle-question"></i></button>
        <button className="mark-status familiar" onClick={()=>{
          markStatus(flashcards[currCardIndex], 'Familiar', setAllProblems);
        }}>Familiar  <i class="fa-regular fa-face-laugh-squint"></i></button>
        <button className="mark-status mastered" onClick={()=>{
          markStatus(flashcards[currCardIndex], 'Mastered', setAllProblems);
        }}>Mastered  <i class="fa-solid fa-bolt"></i></button>
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={()=>{
          if (currCardIndex !== 0) {
            setCurrCardIndex(currCardIndex - 1);
          }}}><i class="fa-solid fa-circle-left"></i></button>
        <button className="nav-button" onClick={()=>{
          if (currCardIndex !== flashcards.length - 1) {
            setCurrCardIndex(currCardIndex + 1)
          }}}><i class="fa-solid fa-circle-right"></i></button>
      </div>
    </div>
  );
}

export default Practice;