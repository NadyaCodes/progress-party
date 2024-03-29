import {useState} from 'react'

export default function AddActivity(props) {
  const {state, setState, toggleShowActivity} = props

  const [activity, setActivity] = useState('')

  const submitActivity = () => {
    setState(prev => ({...prev, currentProgress: {...prev.currentProgress, [activity]: 0}}))
    setActivity('')
  }

  const handleActivity = (event) => {
    setActivity(event.target.value)
  }

  return(
    <section className='new-activity-input'>
      <input type='text' name='newActivityName' id='newActivityName' value={activity} onChange={handleActivity}/>
      <button onClick={() => submitActivity()} className='secondary'>Add it!</button>
    </section>)
}