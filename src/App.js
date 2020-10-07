import React from 'react';
import Header from './components/header/Header'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'
import Note from './components/note/Note'
import notes from './notedata'
import './App.css';

function App() {
  
  return (
    <div>
      <Header />
      <Form />
      <Note  />
      <Footer />
    </div>
  )
 

}

export default App;
