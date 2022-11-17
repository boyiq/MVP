import React, {useState} from 'react';
import {renderCats} from '../helpers/renderLists.js';
import filterProblems from '../helpers/filterProblems.js';
import generateRandom from '../helpers/generateRandom.js'

const Practice = ({allProblems})=>{
  const [category, setCategory] = useState('all');
  const [firstLoad, setFirstLoad] = useState(true);
  const [selectedProblems, setSelectedProblems] = useState(allProblems)
  const [flashcards, setFlashcards] = useState(allProblems);
  const [mode, setMode] = useState('review');
  const [currCardIndex, setCurrCardIndex]=useState('');

  if (firstLoad) {
    return (
      <div>
        <form>
          <label>Pick a category</label>
          <select className="dropdown-list" onChange={(event)=>{
            setCategory(event.target.value);
            // setSelectedProblems(filterProblems(event.target.value, allProblems));
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
          <label>Pick a mode</label>
          <select className="dropdown-list" onChange={(event)=>{
            setMode(event.target.value);
            setFlashcards(generateRandom(selectedProblems, event.target.value));
          }}>
            <option value="review">Review</option>
            <option value="grind">Grind</option>
          </select>
          <button onClick={()=>{
            setFirstLoad(false);
            setCurrCardIndex(0);
          }}>OK</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div className="flashcard">
        <div>{flashcards[currCardIndex].name}</div>
        <div>{flashcards[currCardIndex].category}</div>
        <div>{flashcards[currCardIndex].familiarity}</div>
        <a href={flashcards[currCardIndex].link} target="_blank" rel="noopener noreferrer">Go to problem</a>
      </div>
      <div>
        <form>
          <label>Current Attempt Duration</label>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <button onClick={()=>{

        }}>Unfamiliar</button>
        <button>Familiar</button>
        <button>Mastered</button>
      </div>
      <button onClick={()=>{
        if (currCardIndex !== 0) {
          setCurrCardIndex(currCardIndex - 1);
        }}}>Before</button>
      <button onClick={()=>{
        if (currCardIndex !== flashcards.length - 1) {
          setCurrCardIndex(currCardIndex + 1)
        }}}>Next</button>
    </div>
  );
}

export default Practice;