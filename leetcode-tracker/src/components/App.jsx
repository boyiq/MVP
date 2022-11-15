import React, { useState, useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Summary from './Summary.jsx';
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
        <Route exact path='/' element={<Summary />} />
        <Route path='/new' element={<New />} />
        <Route path='/problems' exact element={<Problems allproblems={allProblems}/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
