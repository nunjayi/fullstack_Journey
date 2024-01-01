import { useState } from 'react'

import './App.css'

function Course(props){
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )
}
function PartsName(props){
  const array = props.array
  console.log('my array',array[0].name)
  return(
    <div>
       <p>course names</p>
      <ul>
      {
        array.map(
          (item)=>
              <li key={item.id}>{item.name}</li>
        

        )
     }
      
      </ul>
     
    </div>
  )
}






function App() {
  const [count, setCount] = useState(0)

  const course = {
    name:'half stack application development',
    parts:[
      {
        name:'fundamentals of react',
        exercise:10
      },
      {
        name:'using props to pass data',
        exercise:7
      },
      {
        name:'state of a component',
        exercise:14
      },

    ]
  }
console.log(course.parts[0])

//complex state


  return (
    <>
      <button onClick={()=>{setCount(count + 1)}}>{count}</button>
      <Course course =  {course.name}/>
      <PartsName array = {course.parts} />
      
    </>
  )
}

export default App
