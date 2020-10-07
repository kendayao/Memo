import React, { useState } from 'react';
import Header from './components/header/Header'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'
import Note from './components/note/Note'
import notes from './notedata'
import './App.css';

function App() {

  const[notes, setNotes]=useState([])
  
  function addNote(note){
    setNotes([...notes, note])
  }

  function handleDelete(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((note, index)=>{
        return index !==id
      })
    })
  }

  console.log(notes)
  return (
    <div>
      <Header />
      <Form onAdd={addNote}  />
      {notes.map((noteItem, index)=>{
        return <Note key={index} id={index} delete={handleDelete} title={noteItem.title}  content={noteItem.content}/>
      })}
      
      <Footer />
    </div>
  )
 

}

export default App;
