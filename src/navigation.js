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

  const togglePic = () => {
    state.pic === true ?
      setState(prev => ({...prev, pic: false}))
      : setState(prev => ({...prev, pic: true}))
  }

  const toggleDrink = () => {
    state.drink === true ?
      setState(prev => ({...prev, drink: false}))
      : setState(prev => ({...prev, drink: true}))
  }

  const toggleAll = () => {
    setState(prev => ({...prev, party: false, progress: false, pic: false}))
  }


  return(
    <nav>
      <ul>
        <li onClick={toggleAll}>Home</li>
        <li onClick={toggleProgress}>Progress</li>
        {/* <li onClick={togglePic}>Pic of the Day</li>
        <li onClick={toggleDrink}>Random Drink Recipe</li> */}
        <li onClick={toggleParty}>Party</li>
      </ul>
    </nav>
  )
}