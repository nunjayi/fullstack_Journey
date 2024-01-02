import { useState } from 'react'

import './App.css'





function AddNotes(props ){
  const notes = props.notes
  console.log(notes)
  return(
    <>
        <div>
          <p>MY NOTES</p>
          {
            notes.map((item)=><li key={item.id}>{item}</li>)
          }
         
        </div>
    </>
  )
}

function App() {
  const [notes, updateNotes] = useState([])
  const [newNote, addNewNote] = useState('')

let handleSubmit = (e)=>{
  e.preventDefault()
  console.log('event is',e)
  const allNotes = [...notes,newNote]
  console.log('the note is ', notes)
  updateNotes(allNotes)
  console.log(notes)
  addNewNote('') 
}
let handleNewNote = (event)=>{
     addNewNote(event.target.value)
     console.log(event.target.value)
}



  return ( 
    <>
      <div>my form shall be here
        <form onSubmit={handleSubmit}>
          <input value={newNote} onChange={handleNewNote}></input>  
          
          <button type='submit' >ADD</button>
        </form>
      </div>
      <AddNotes notes = {notes} />
    </>
  )
}

export default App
