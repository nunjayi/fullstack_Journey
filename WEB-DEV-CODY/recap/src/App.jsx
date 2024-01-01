import { useState } from 'react'

import './App.css'
function Mycomponent(){

const myArray = [0,0,0,0,0]
  return(
    <>
        <div>
          <p>hello world</p>
          {
            myArray.map((item)=><li key={item.id}>hello there</li>)
          }
        </div>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)
  let countUpdate =()=>{
    setCount(count + 1)
  }
  return (
    <>
      <p>hello wolrd{count}</p>
      <button onClick={countUpdate}>{count}</button>  
      <Mycomponent />
    </>
  )
}

export default App
