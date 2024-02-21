import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function Todo(){
    const[todo,updateTodo]=useState('')
    const[todos,allTodos] = useState([])
   
    //handle submit
    let submit=(e)=>{
        e.preventDefault()
        console.log(todo)
        //axios to add a todo to the db.json
        let todoObject = {
            content: todo,
            status: false
        }
        //axios post
        axios
        .post('http://localhost:3001/todos',todoObject)
        .then(response => {
        console.log(response)
        })
        updateTodo('')
        //axios get
        axios
              .get('http://localhost:3001/todos')
              .then(response => {
                console.log('promise fulfilled')
                allTodos(response.data)
               
              })
       
    }
    let newTodo = (e)=>{
        updateTodo(e.target.value)
        console.log(e.target.value)
    }
    ///hook and axios 
    useEffect(() => {
        console.log('effect')
        axios
        .get('http://localhost:3001/todos')
        .then(response => {
          console.log('promise fulfilled')
          allTodos(response.data)
         
        })
        
      }, [])
     
    return(<>
       <div className='card'>
            <p><span>Enter Todo</span></p>
            <form onSubmit={submit}>
                <input type="text" value={todo} onChange={newTodo}/><br/> <button type='submit'>ADD</button>
            </form>
       
      </div>
      <div className='card-display'>
       <ul>
            {
                todos.map((x,index)=><li key={index}>{x.content}{x.status}</li>)
            }
            
       </ul>
        
      </div>
    
    
    </>)
}

export default Todo