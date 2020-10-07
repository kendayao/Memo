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

  console.log(notes)
  return (
    <div>
      <Header />
      <Form onAdd={addNote}  />
      {notes.map((noteItem, index)=>{
        return <Note key={index} id={index} title={noteItem.title}  content={noteItem.content}/>
      })}
      
      <Footer />
    </div>
  )
 

}

export default App;
