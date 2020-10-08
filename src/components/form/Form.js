import React, {useState} from 'react'
import './Form.css'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Form(props){


    const [isExpanded, setIsExpanded]=useState(false)
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

   function expand(){
       setIsExpanded(true)
   }
  

    return(
        <div>
            <form className='create-note'>
                {isExpanded ? <input onChange={handleInputChange} value={note.title} name='title' placeholder='Title'></input> :null}
                <textarea onClick={expand} onChange={handleInputChange} name='content' placeholder='Write a note...' rows={isExpanded ? '3': '1'} value={note.content}></textarea>
                <Zoom in={isExpanded?true:false}>
                <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default Form