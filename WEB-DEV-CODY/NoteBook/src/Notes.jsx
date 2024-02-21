import { useState } from 'react'

import './App.css'

function Notes(){
    return(<>
      <div className='card'>
            <p><span>Enter Note</span></p>
            <hr></hr>
            <p>enter title:</p>
            <input></input><br/>
            <form action="">
               <textarea></textarea><br/>
               <button>add</button>
            </form>
       
      </div>
      <div className='card-display'>
        <p>display note titles</p>
      </div>
    
    
    </>)
}

export default Notes