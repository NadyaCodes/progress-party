import { useState } from 'react'
import Progressbar from 'react-js-progressbar'
import confetti from 'canvas-confetti'



export default function Progress(props) {
  const {state, setState} = props;
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



  return (
    <section className="allActivities">
      {activitesArray.map(activity =>
        <div className="activityContainer">
          <h2>{activity}</h2>
        <div className="progressbarContainer">
          <Progressbar
            input={progressObj[activity]}
            pathWidth={10}
            pathColor={['#56ab2f', '#a8e063']}
            trailWidth={15}
            trailColor='#363636'
            textStyle={{ fill: 'blue' }}
          >
          </Progressbar>
          <button className="upvote" onClick={() => changePercent(activity)}>Up</button>
          <button className="reset" onClick={() => resetPercent(activity)}>Reset</button>
        </div>
      </div>
      )}
    </section>
  )
}