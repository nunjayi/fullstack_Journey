import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Notes from './forms.jsx'
import ComplexState from './state.jsx'
import ObjectButton from './object_spread.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ComplexState />
    <ObjectButton />
    <Notes />
  </React.StrictMode>,
)
