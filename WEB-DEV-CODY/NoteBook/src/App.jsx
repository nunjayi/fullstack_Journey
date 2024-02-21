import { useState } from 'react'
import Notes from './Notes'
import Todo from './Todo'
import './App.css'

function App() {
  const [display, changeDisplay] = useState(0)
  console.log(`display is ${display}`)
  //change display 
  let todo=()=>{
    changeDisplay(1)
    console.log(display)
  }
  let notes=()=>{
    changeDisplay(2)
    console.log(display)
  }
  //return jsx
  if(display == 0){return(
    <>
      <div className='card'>
        <p><span>NOTES</span></p>
        <p>“open now to launch the  notes <br /> app and boost efficiency!”</p>
        <button onClick={notes}>OPEN</button>
      </div>
      <div className='card'>
        <p><span>TODO</span></p>
        <p>“open now to launch the  notes <br /> app and boost efficiency!”</p>
        <button  onClick={todo}>OPEN</button>
      </div>
    </>
  )}else if(display == 1){
    return (
      <Todo />
    )
  }else if(display == 2){
    return(<Notes />)
  }
}

export default App
