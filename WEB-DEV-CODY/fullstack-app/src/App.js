import logo from './logo.svg';
import './App.css';

const Hello = ()=>{
  let time = new Date()
  return(
    <p>the time is :{time}</p>
  )
}
function App() {
  return (
    <div>
      <p>Hello SIR!!</p>
      <Hello />
    </div>
  );
}


export default App;
