import React, {useState} from 'react'
import './Form.css'

function Form(props){

    const[note, setNote]=useState({
        title:"",
        content:""
    })

    function handleInputChange(event){
        event.preventDefault()
        const {name, value}=event.target

        setNote(prevNote=>{
            return {...prevNote, [name]:value}
        })
    }
    
    function submitNote(event){
        event.preventDefault();
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
    }

    return(
        <div>
            <form>
                <input onChange={handleInputChange} value={note.title} name='title' placeholder='Title'></input>
                <textarea onChange={handleInputChange} name='content' placeholder='Take a note...' rows="3" value={note.content}></textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default Form