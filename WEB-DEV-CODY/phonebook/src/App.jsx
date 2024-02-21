import { useState } from 'react'
import DisplayContacts from './DisplayContacts'
import './App.css'

function Phonebook(){
    
//state hook to track data entered
    const [name, updateName] = useState('')
    const [number, updateNumber] = useState('')
    const [allNames, updateAllNames] = useState([])
//handle submission of the form
    let handleSubmit = (e)=>{
      e.preventDefault()
      console.log('submitted')
     
      //check if entry is empty
      if(name.length === 0){
        window.alert("enter a valid name")
       
      }else if(number == ''){
        window.alert('enter a valid number')
    }else{
         //add name to storage array
            let AddedNames = [...allNames,name]
            updateAllNames(AddedNames)
            console.log(AddedNames)

      }
      
      //check if  a name already exists
      if(Boolean(allNames.find(x=>x === name))=== true ){
          window.alert(`${name} already exist in the phonebook`)
      }
     

      //reset input field
      updateName('')
      updateNumber('')
    }
//name entered
    let nameInput = (e)=>{
        updateName(e.target.value)
        console.log(e.target.value)
    }
//number entered
    let numberEntered = (e)=>{
        updateNumber(e.target.value)
        console.log(e.target.value)
    }
    
    return(
        <section className='wrapper'>
          <div className='sub-wrapper'>
                <form action="" onSubmit={handleSubmit}>
                    <p>Enter Name:</p>
                    <input type="text" value={name} onChange={nameInput}  minLength={10} maxLength={20}/>
                    <br></br>
                    <p>Enter Number:</p>
                    <input type='text' value={number} onChange={numberEntered}  minLength={10} maxLength={10}/><br />
                    <button type='submit'>ADD</button>              
                </form>
            </div>
            <div className='sub-wrapper'>
              <DisplayContacts names = {allNames} />
            </div>
        </section>

    )
}

export default Phonebook
