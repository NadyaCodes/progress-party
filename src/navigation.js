export default function Nav({state, setState}) {

  const toggleProgress = () => {
     state.progress === true ? 
      setState(prev => ({...prev, progress: false})) 
      : setState(prev => ({...prev, progress: true}))
  }


  return(
    <nav>
      <ul>
        <li>Home</li>
        <li onClick={toggleProgress}>Progress</li>
        <li>Party</li>
      </ul>
    </nav>
  )
}