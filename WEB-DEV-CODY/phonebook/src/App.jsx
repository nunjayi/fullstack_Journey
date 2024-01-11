import { useState } from 'react'

import './App.css'
//form component to enter and submit contacts
function EnterContact(){
  const [Contacts, updateContacts] = useState([])
  const [newContact, updateNewNote] = useState('')
  const [phoneNumbers, updateNumbers] = useState([])
  const [phoneEntered, enterPhone]= useState('')
  const [phoneBook, updatePhonebook] = useState([])
 
  // handle the form being submitted
  let handleSubmit =(e)=>{
     e.preventDefault()

     if(typeof newContact === 'string' && newContact.length == 0 ){
      window.alert('enter a valid name')
         }else{

         //prevent a duplicate number
      let duplicateName =Contacts.find((x)=>x === newContact)
         //check to see if the name already entered exists 
        if(duplicateName == undefined){
         //update the info in the respective arrays 
          let allContacts = [...Contacts,newContact]
          let allPhoneNumbers = [...phoneNumbers, phoneEntered]
          //object criterria to store the contact to the phonebook variable
          const personObject = {
              id:Contacts.length + 1,
              name:newContact,
              number:phoneEntered,
          }
          const phoneBook_array = phoneBook.concat(personObject)
         
         //update States of the arrays used to store the contacts
          updateNumbers(allPhoneNumbers)
          updateContacts(allContacts)
          updatePhonebook(phoneBook_array)



         console.log(phoneBook)
         //console log the results 
          //console.log(phoneEntered)
          //console.log(Contacts)
         // console.log(phoneBook)
          
          console.log('form submit ')
        }else {
            window.alert(`${newContact} already exists`)
        }

    }
    
    updateNewNote('')
    enterPhone('')
   
  }
  //entered contact
  let contactEntered = (e)=>{
      
      updateNewNote(e.target.value) 
      console.log(newContact) 
}
//handle entered phoneNumber
let newPhoneNumber= (e)=>{
      enterPhone(e.target.value)
      //console.log(phoneEntered)
}


  return(
      <>
      <div>
        <div>
          <p><b>PHONEBOOK</b></p>
          <form onSubmit={handleSubmit}>
            name: <input value={newContact} onChange={contactEntered}/><br />
            phone: <input minLength={10} maxLength={10} value={phoneEntered}onChange={newPhoneNumber}  /><br /><br />
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
          <div>
             {
                  

             }
          </div>
      </div>
       
        

      </>
  )
}


function App() {


  return (
    <>
      <EnterContact />    
    
    </>
  )
}

export default App
