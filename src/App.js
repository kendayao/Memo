import React, { useEffect, useState } from 'react';
import Header from './components/header/Header'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'
import Note from './components/note/Note'
import './App.css';

function App() {

//   useEffect(()=>{
//     const storedToDos=JSON.parse(localStorage.getItem('toDo'))
//     setNotes(storedToDos)
// },[])
  
  const[notes, setNotes]=useState(JSON.parse(localStorage.getItem('toDo')) || [])
  
  function addNote(note){
    setNotes(prevNotes=>
      [...prevNotes, note]
    )
  }

  function handleDelete(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((note, index)=>{
        return index !==id
      })
    })
  }

  useEffect(()=>{
    localStorage.setItem('toDo', JSON.stringify(notes))
},[notes])

  
  return (
    <div>
      <Header />
      <Form onAdd={addNote} notes={notes}  />
      {notes.map((noteItem, index)=>{
        return <Note key={index} id={index} delete={handleDelete} title={noteItem.title}  content={noteItem.content} />
      })}
      
      <Footer />
    </div>
  )
 

}

export default App;
