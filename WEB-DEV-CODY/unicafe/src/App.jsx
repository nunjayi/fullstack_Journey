import { useState } from 'react'

import './App.css'

function Statistics(props){

  let rating = props.rating 
  //total rating
let totalRating = rating.good + rating.bad + rating.neutral
let positive = (rating.good* 1) + (rating.neutral * -1)
console.log(positive)
  console.log(rating)
  return(
    <>
      <p>good -- {rating.good}</p>
      <p>neutral -- {rating.bad}</p>
      <p>bad -- {rating.neutral}</p>
      <p>all-- {totalRating}</p>
      <p>average -- {totalRating/100}%</p>
      <p>positive -- {positive}</p>
    </>
  )
}


function App() {
  
const [rating, updateRating] = useState({good:0, bad:0, neutral:0})
let good = ()=>{
    let newRating = {
      good:rating.good + 1,
      bad:rating.bad,
      neutral:rating.neutral
    }
    updateRating(newRating)
}
let bad = ()=>{
  let newRating = {
    good:rating.good,
    bad:rating.bad + 1,
    neutral:rating.neutral
  }
  updateRating(newRating)
}
let neutral = ()=>{

  let newRating = {
    good:rating.good,
    bad:rating.bad,
    neutral:rating.neutral + 1
  }
  updateRating(newRating)
}
let totalRating = rating.good + rating.bad + rating.neutral

if(totalRating == 0){
  return(
    <>
      <p>GIVE FEEDBACK</p>
      <button onClick={good}>Good</button>
      <button onClick={neutral} >Neutral</button>
      <button onClick={bad} >Bad</button>
      <p>No feedback yet. Check again later</p>
    </>
  )
}
  return (
    <>
      <p><b>UNICAFE</b></p>
      <p>GIVE FEEDBACK</p>
      <button onClick={good}>Good</button>
      <button onClick={neutral} >Bad</button>
      <button onClick={bad} >Neutral</button>
      
      <Statistics rating = {rating}/>
    </>
  )
}

export default App
