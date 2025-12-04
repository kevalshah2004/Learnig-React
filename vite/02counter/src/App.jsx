import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) // hook

  //let counter = 5;

  const addValue = () => {
    if(counter < 20){
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      // this will increase it 4 times
      // setCounter(counter+1) no matter how many times you write this
      // it will only increase it one time as this will be sent as a batch 
      // and similar tasks are believed as one
      // so we use callback
    }
    
  }

  const removeValue =() => {
    if(counter > 0){
      setCounter(counter-1)
    }
    
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>counter = {counter}</h2>

      <button
      onClick = {addValue}
      >Add Value</button>
      <br></br>
      <button
      onClick = {removeValue}>Remove value</button>
    </>
  )
}

export default App
