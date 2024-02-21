import React from 'react'
import ReactDOM from 'react-dom/client'
import Phonebook from './App.jsx'
import axios from 'axios'
import './index.css'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)
promise.then(res=>console.log(res))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Phonebook />
  </React.StrictMode>,
)
