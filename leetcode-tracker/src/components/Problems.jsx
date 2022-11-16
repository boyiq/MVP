import React from 'react';

const Problems = ({allProblems})=>{
  return (
    <div>
      {allProblems[0].name}
    </div>
  );
}

export default Problems;