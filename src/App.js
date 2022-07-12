import logo from './logo.svg';
import './App.css';
import Nav from './navigation'
import Progress from './progress'
import React, {useEffect, useState} from 'react'

function App() {

  const startingProgress = { Knitting: 10, Dance: 20, Coding: 50};

  const [state, setState] = useState({
    progress: false,
    currentProgress: startingProgress
  })


  return (

    <main>
      < Nav setState={setState} state={state}/>
      {state.progress && < Progress state={state} setState={setState}/>}
    </main>
  );
}

export default App;
