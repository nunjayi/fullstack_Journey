import {useState} from 'react'



function ObjectButton(){
    let myObject = {
        left:0,
        right:0
    }
    const [click, updateClicks] = useState({left:0,right:0})
    console.log(click)

    let rightclick = ()=>{
        const newClicks = {...myObject,right:myObject.right+1}
        updateClicks(newClicks)
    }
    let leftclick = ()=>{
        updateClicks({...myObject,left:myObject.left+1})
    }
    return(
        <>
            <p>handling object syntax</p>
            <button onClick={rightclick}>{myObject.left}</button>
            <button onClick={leftclick}>{myObject.right}</button>
        </>
    )
}

export default ObjectButton