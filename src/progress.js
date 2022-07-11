import { useState } from 'react'
import Progressbar from 'react-js-progressbar'



export default function Progress() {
  const [percentage, setPercentage] = useState(50)


  const activities = { Knitting: 10, Dance: 20, Coding: 50}

  const activitesArray = Object.keys(activities)

  const printObject = (object) => {
    console.log("yay")

  }


  return (
    <section class="allActivities">
      {activitesArray.map(activity => 
        <div class="activityContainer">
          <h2>{activity}</h2>
        <div class="progressbarContainer">
          <Progressbar
            input={activities[activity]}
            pathWidth={10}
            pathColor={['#56ab2f', '#a8e063']}
            trailWidth={15}
            trailColor='#363636'
            textStyle={{ fill: 'blue' }}
          >
          </Progressbar>
        </div>
      </div>
      )}
    </section>
  )
}