import React, { useState, useEffect }from 'react';
import axios from 'axios';

function App() {
  const [display, setDisplay]=useState('Hello World');

  useEffect(() => {
    axios.get('/test')
      .then((results) => {
        console.log(results.data.display)
        setDisplay(results.data.display)
      })
      .catch((err) => { console.log(err); });
  }, []);

  return (
    <div className="App">
      {display}
    </div>
  );
}

export default App;
