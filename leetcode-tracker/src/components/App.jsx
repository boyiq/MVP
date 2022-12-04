import React, { useState, useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './Summary.jsx';
import Problems from './Problems.jsx';
import New from './New.jsx';
import Practice from './Practice.jsx';
import Navbar from './Navbar.jsx';

function App() {
  const [allProblems, setAllProblems]=useState([]);
  const [isLoading, setIsLoading]=useState(true);

  useEffect(() => {
    axios.get('/problems')
      .then((results) => {
        setIsLoading(false);
        setAllProblems(results.data)
      })
      .catch((err) => { console.log(err); });
  }, []);

  if (isLoading) {
    return (<div>is Loading</div>)
  }

  return (
    <div className="App">
      <h1>My Leetcode Progress yay</h1>
      <div className="navbar-section">
        <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home allProblems={allProblems}/>} />
          <Route path='/new' element={<New allProblems={allProblems} setAllProblems={setAllProblems}/>} />
          <Route path='/problems' exact element={<Problems allProblems={allProblems} setAllProblems={setAllProblems}/>} />
          <Route path='/practice' exact element={<Practice allProblems={allProblems} setAllProblems={setAllProblems}/>} />
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
