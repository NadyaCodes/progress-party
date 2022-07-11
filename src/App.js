import logo from './logo.svg';
import './App.css';
import Nav from './navigation'
import Progress from './progress'
import React, {useEffect, useState} from 'react'

function App() {
  // const [page, setPage] = useState("Home")

  // useEffect(() => {
  //   setPage(target)
  // }, [click])

  return (

    <main>
      < Nav/>
      < Progress/>
      {/* {page} */}
    </main>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
