export default function Nav({state, setState}) {

  const toggleProgress = () => {
     state.progress === true ? 
      setState(prev => ({...prev, progress: false})) 
      : setState(prev => ({...prev, progress: true}))
  }

  const toggleParty = () => {
    state.party === true ?
      setState(prev => ({...prev, party: false}))
      : setState(prev => ({...prev, party: true}))
  }

  const toggleAll = () => {
    setState(prev => ({...prev, party: false, progress: false}))
  }


  return(
    <nav>
      <ul>
        <li onClick={toggleAll}>Home</li>
        <li onClick={toggleProgress}>Progress</li>
        <li onClick={toggleParty}>Party</li>
      </ul>
    </nav>
  )
}