import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './Avatar.jsx'

function App() {
  const [count, setCount] = useState(0)

  // https://react.dev/learn/writing-markup-with-jsx
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';

  return (
  // Assignment 1 stuff
    /* 
    <div>
      <h1>Test title</h1>
      <svg>
          <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
          <input type="text" />
      </form>
    </div>

    <div>Farts</div>

    <h1>Hedy Lamarr's Toots</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      className="photo" 
      strokeWidth="2"
    />
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
    </ul>

    <div className="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p className="summary">
      You can find my thoughts here.
      <br /><br />
      <b>And <i>pictures</i></b> of scientists!
    </p>
    */
  // Assignment 2 stuff
    /*
    <img classname="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />

    <img className="avatar" src="{avatar}" alt="{description}" />
    */

  <>
    <Avatar />    
  </>
 );
}

export default App
