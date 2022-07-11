import { useState } from 'react'
import Progressbar from 'react-js-progressbar'
import confetti from 'canvas-confetti'



export default function Progress() {
  const [percentage, setPercentage] = useState({ Knitting: 10, Dance: 20, Coding: 50})

  const activitesArray = Object.keys(percentage)

  const changePercent = (activity) => {
    let newNum = percentage[activity] += 10;
    if (newNum === 100) {
      confetti();
    }
    if (newNum > 100) {
      newNum = 10;
    }
    const newPercentage = {...percentage}
    newPercentage[activity] = newNum
    setPercentage(newPercentage);
  }



  return (
    <section className="allActivities">
      {activitesArray.map(activity =>
        <div className="activityContainer">
          <h2>{activity}</h2>
        <div className="progressbarContainer">
          <Progressbar
            input={percentage[activity]}
            pathWidth={10}
            pathColor={['#56ab2f', '#a8e063']}
            trailWidth={15}
            trailColor='#363636'
            textStyle={{ fill: 'blue' }}
          >
          </Progressbar>
          <button onClick={() => changePercent(activity)}>Up</button>
        </div>
      </div>
      )}
    </section>
  )
}