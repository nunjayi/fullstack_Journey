import { useState } from 'react'

import './App.css'


function App() {

    let map =(arr, fn)=>{
      let array = arr
      let length = array.length+1
      for(i=0;i<length; i++){
          array[i]= array[i]++
      }
      return(array)
      console.log(map([1,2,3,4]))
    }
    


 return(
  <div>
    <p>{console.log(map([1,2,3,4]))}</p>
    <p></p>
  </div>
  
 )
}


export default App
