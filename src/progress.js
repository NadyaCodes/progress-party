import { useState } from 'react'
import Progressbar from 'react-js-progressbar'
import confetti from 'canvas-confetti'
import AddActivity from './AddActivity';



export default function Progress(props) {
  const {state, setState} = props;
  const [showMakeActivity, setShowMakeActivity] = useState(false)
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
  }

  const changePercent = (activity) => {
    let origNum = progressObj[activity]
    let newNum =  origNum + 10;

    if (newNum === 100) {
      confetti();
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

  return (
    <div className='activities-container'>
      <button onClick={() => toggleShowActivity()}>Add New Activity</button>
      {showMakeActivity && <AddActivity state={state} setState={setState}/>}
    <section className="allActivities">
      {activitesArray.map((activity, index) =>
        <div className="activityContainer">
          <h2>{activity}</h2>
        <div className="progressbarContainer">
          <div className='progress-circle'>
          <Progressbar
            input={progressObj[activity]}
            pathWidth={10}
            pathColor={['#56ab2f', '#a8e063']}
            trailWidth={15}
            trailColor='#363636'
            textStyle={{ fill: 'blue' }}
            key={index}
          >
          </Progressbar>
          </div>
          <button className="upvote" onClick={() => changePercent(activity)}>Up</button>
          <button className="reset" onClick={() => resetPercent(activity)}>Reset</button>
          <button className="delete" onClick={() => deleteActivity(activity)}>Delete</button>
        </div>
      </div>
      ).reverse()}
     
      </section>

    </div>
  )
}