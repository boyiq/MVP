import axios from 'axios';

const markStatus = (problem, status, setAllProblems)=>{
  problem.familiarity = status;
  axios.put('/problems/fam', problem)
    .then(()=>{
      axios.get('/problems')
        .then((result)=>{
          setAllProblems(result.data)
        })
        .catch((err)=>{
          console.log(err);
        })
    })
    .catch((err)=>{
      console.log(err);
    })
};

const updateDur = (problem, duration, setAllProblems) => {
  problem.last_duration = duration;
  axios.put('/problems/dur', problem)
    .then(()=>{
      axios.get('/problems')
        .then((result)=>{
          setAllProblems(result.data)
        })
        .catch((err)=>{
          console.log(err);
        })
    })
    .catch((err)=>{
      console.log(err);
    })
};

export {markStatus, updateDur};