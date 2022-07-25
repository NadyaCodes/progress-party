import { useState } from 'react'
import Progressbar from 'react-js-progressbar'
import confetti from 'canvas-confetti'
import AddActivity from './AddActivity';
import ShowStar from './ShowStar';



export default function Progress(props) {
  const {state, setState} = props;
  const [showMakeActivity, setShowMakeActivity] = useState(false)
  const [star, setStar] = useState({})
  let progressObj = state.currentProgress

  const activitesArray = Object.keys(progressObj)

  const resetPercent = (activity) => {

    setState(prevState => ({
      ...prevState,
        currentProgress: {
          ...prevState.currentProgress,
            [activity]: 0
        }
    }))
    setStar((prev) => ({...prev, [activity]: false}));
  }

  const changePercent = (activity) => {
    let origNum = progressObj[activity]
    let newNum =  origNum + 10;

    if (newNum === 100) {
      confetti();
      setStar((prev) => ({...prev, [activity]: true}));
    }

    setState(prevState => ({
      ...prevState,
        currentProgress: {
          ...prevState.currentProgress,
            [activity]: newNum
        }
    }))

  }

  const toggleShowActivity = () => {
    showMakeActivity ? setShowMakeActivity(false) : setShowMakeActivity(true)
  }


  const deleteActivity = (option) => {
    const newCurrentProgress = {...state.currentProgress} 
    delete newCurrentProgress[option]
    setState(prev => ({
      ...prev, currentProgress: newCurrentProgress
    }))
  }

  // const showStar = () => {
  //   return(
  //     <div>Star</div>
  //   )
  // }

  return (
    <div className='activities-container'>
      <button onClick={() => toggleShowActivity()} className='secondary'>Add New Activity</button>
      {showMakeActivity && <AddActivity state={state} setState={setState}/>}
    <section className="allActivities">
      {activitesArray.map((activity, index) =>
        <div className="activityContainer">
          <h2>{activity}</h2>
          
        <div className="progressbarContainer">
          <div className='progress-circle'>
          {star[activity] ? < ShowStar/> : 
          <Progressbar
            input={progressObj[activity]}
            pathWidth={10}
            pathColor={['#e7fafa', '#57a2a2']}
            trailWidth={15}
            trailColor='#282c34'
            textStyle={{ fill: '#1b7272' }}
            key={index}
          >
          </Progressbar>}
          </div>
          <button className="upvote secondary" onClick={() => changePercent(activity)}>Up</button>
          <button className="reset secondary" onClick={() => resetPercent(activity)}>Reset</button>
          <button className="delete secondary" onClick={() => deleteActivity(activity)}>Delete</button>
          
        </div>
      </div>
      ).reverse()}
     
      </section>

    </div>
  )
}