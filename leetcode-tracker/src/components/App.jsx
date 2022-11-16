import React, { useState, useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './Summary.jsx';
import Problems from './Problems.jsx';
import New from './New.jsx'
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
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/new' element={<New allProblems={allProblems} setAllProblems={setAllProblems}/>} />
        <Route path='/problems' exact element={<Problems allProblems={allProblems}/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
