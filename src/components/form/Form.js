import React from 'react'
import './Form.css'

function Form(){

    return(
        <div>
            <form>
                <input name='title' placeholder='Title'></input>
                <textarea name='content' placeholder='Take a note...' rows="3"></textarea>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form