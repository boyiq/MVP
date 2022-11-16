import React from 'react';

const New = ()=>{
  return (
    <div>
      <form id="new-problem-form">
        <label>Problem name</label>
        <input></input>
        <label>Category</label>
        <select>
          <option value="Arrays">Arrays</option>
          <option value="Binary">Binary</option>
          <option value="Dynamic Programming">Dynamic Programming</option>
          <option value="Graph">Graph</option>
          <option value="Interval">Interval</option>
          <option value="Linked List">Linked List</option>
          <option value="Matrix">Matrix</option>
          <option value="String">String</option>
          <option value="Tree">Tree</option>
          <option value="Heap">Arrays</option>
        </select>
        <label>Difficulty level</label>
        <select>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <label>Target Duration</label>
        <select>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default New;