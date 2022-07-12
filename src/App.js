import logo from './logo.svg';
import './App.css';
import Nav from './navigation'
import Progress from './progress'
import Party from './party'
import Pic from './pic'
import React, {useEffect, useState} from 'react'


function App() {

  const startingProgress = { Knitting: 10, Dance: 20, Coding: 50};

  const [state, setState] = useState({
    progress: false,
    currentProgress: startingProgress,
    party: false,
    pic: false
  })


  return (
    <div className={state.party ? "party" : ''}>
      <main>
        < Nav setState={setState} state={state}/>
        <section className='content'>
          {state.progress && < Progress state={state} setState={setState}/>}
          {state.pic && <Pic/>}
        </section>
        {state.party && <Party/>}
        
      </main>
    </div>
  );
}

export default App;
