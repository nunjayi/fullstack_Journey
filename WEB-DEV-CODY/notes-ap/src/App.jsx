import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App (){

  //state hooks to keep track of every note entered
const [note, updateNote] = useState('')
const [important, updateImportant]= useState('')
const [allNotes, updateMyNotes] =useState([])


let updateNotes=(e)=>{
  e.preventDefault()

//validate data entered
      if(note.length === 0){
        window.alert('enter a note')
      }
      //check whether important is true or false
      if(important === 'true' || important === 'false'){
        console.log('validation passed')
      }else{
        window.alert('enter a valid input')
      }
 
  //add all notes to a storage array
      let newNote={
        id: allNotes.length +1,
        note: note,
        important: important

    }
    let allMyNotes = [...allNotes,newNote]
    //axios to post data
    axios
    .post('http://localhost:3001/notes',newNote)
    .then((res)=>{
      console.log(res.data)
      
    })
    //updateMyNotes(allMyNotes)

//reset the inputs
  updateNote('')
  updateImportant('')
  updateMyNotes(allMyNotes)
//log result
  console.log('submitted') 
   console.log(important)
   console.log(allNotes)
}

//note entered
let noteEntered =(e)=>{
  updateNote(e.target.value) 
  console.log(note)

}
//important or not important
let notePriority = (e)=>{
    updateImportant(e.target.value)
    console.log(important)
  
}

//effect hook 

//return html
  return(
    <>
      <p>MY NOTES APP</p>
      <form onSubmit={updateNotes}>  
        <p>enter note:</p>
         <input value={note} onChange={noteEntered}/><br/>
         <input value={important} onChange={notePriority} minLength={4} maxLength={5}/><br/>
         <button type='submit'>SUBMIT</button>
      </form>
     
    </>
  )
}

export default App
