import { useState } from 'react'

import './App.css'

function DisplayContacts(props){

    let names = props.names
    console.log('the first name is ',names[0])
    return(
        <>
            <div>
                <ul>
                    {
                        names.map((item)=><li key={item.id}>{item}</li>)
                    }
                </ul>
            </div>
        </>
    )

}
export default DisplayContacts