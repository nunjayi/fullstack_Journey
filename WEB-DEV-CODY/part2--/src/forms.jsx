
import {useState} from 'React'

function Notes(){
 const [notes, updateNotes] = useState([])


 if(notes.length === 0){
            return(
                <>
                    <p>not notes yet. </p>
                </>
            )
        }
    return(

       
        <>
            <p>hello world </p>
        </>
    )
}

export default Notes;