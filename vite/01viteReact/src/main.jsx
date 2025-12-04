import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'



const anotherElement = (
  <a href = "https://google.com" targer = '_blank'>Click here</a>
)

const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com', target : '_blank'
  },
  'Click here',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // <App/>
)
// createRoot(document.getElementById('root')).render(
//   reactElement
// )
