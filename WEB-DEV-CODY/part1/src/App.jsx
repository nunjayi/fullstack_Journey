import { useState } from 'react'

import './App.css'

const Button = (props)=>{
  console.log(props.count)
  return(
    <div>{props.count}</div>
  )
}
 

const App = ()=>{
  const [counter, setCount] = useState(0)
  console.log(counter)
  const plus_count = ()=>{setCount(counter + 1 )}
  const reset = ()=>{setCount(0)}
  return(
    
    <div>
      <p>{counter}</p>
      <button onClick={plus_count}>Add</button>
      <button onClick={reset}>reset</button>
      <div>
         <Button count = {counter}/>
      </div>
  
    </div>
  )
}
export default App