import { useState } from 'react'
import './App.css';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';

function App() {

  return (
    <>
     <h1>Form Demo</h1>
     <UncontrolledForm />
     
     <ControlledForm />
    </>
  )
}

export default App
