import {useState} from 'react'

//complex state
function ComplexState(){

    const [clicks, setClicks] = useState({left:0, right:0})
    let leftClick = ()=>{
      const newClick = {
        left:clicks.left + 1,
        right: clicks.right
      }
      setClicks(newClick)
      
    }
    let rightClick =()=>{
      const newClick = {
        left:clicks.left ,
        right: clicks.right + 1
      }
      setClicks(newClick)
      
    }
    console.log(clicks.left)
    console.log(clicks.right)
    return(
      <>
        <button onClick={leftClick}>{clicks.left}</button>
        <button onClick={rightClick}>{clicks.right}</button>
      </>
    )
  }

  export default ComplexState