import { useState } from 'react'

import './App.css'
import { set } from 'mongoose'

const anecdotes  = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

function Votes(props){
    let votes = props.votes

   ///find the most votes
   let mostVotes =  votes.reduce((a,b)=>Math.max(a,b))
   console.log('most votes',mostVotes)
 // what is the index of the most voted anecdote
 let mostVoted = votes.indexOf(mostVotes)
 console.log('index of the most voted',mostVoted)
 if(mostVotes == 0){
   return(
     <p>no votes yet</p>
   )
 }


  return(
    <>
    
    <p><b>MOST VOTED</b></p>
        
    <p>the most voted anecdote is -- <br/><b>{anecdotes[mostVoted]}</b></p>
    <p>with<b> {mostVotes}</b> votes</p>
    </>
    
  )
}

//handling votes tally 
function Button(props){
    //selected anecdote
    let selected = props.selected
    const [votes,updateVotes] = useState([0,0,0,0,0,0,0,0])
    const newVotes = [...votes]
    newVotes[selected] = newVotes[selected] + 1
    let allVotes = ()=>updateVotes(newVotes)
    console.log(votes)

   
    return(
      <>
        <Votes votes = {votes} />
        <button onClick={allVotes}>vote</button>
       
      </>
    )


}

function App() {
 

  const [selected, setSelected] = useState(0)

  let updateSelected=()=>{

        setSelected(Math.floor(Math.random()*8))
  }
   



      return(
          <>
             <p><b>ANECDOTES</b></p>

             <p>No: {selected + 1}</p>
             <p>{anecdotes[selected]}</p><button onClick={updateSelected}>NEXT</button>

             <Button selected = {selected}/>
          </>



      )

  
}

export default App
