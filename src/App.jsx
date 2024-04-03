import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0)

  const addvalue = () =>{
    
    if(counter < 20){

      setCounter(counter + 1 );

    }
    
    
    console.log("clicked" , counter);
  }

  const removeValue = () =>{
  
    if(counter > 0){

      setCounter(counter - 1 );

    }
    
      
   
    
    console.log("clicked" , counter)
  }

  return (
    <>
      <h1>Dipesh Kumar</h1>
      <h2>counter value: {counter}</h2>

      <button onClick = {addvalue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove Value {counter} </button>

      <p>footer: {counter} </p>
    </>
  )
}

export default App
