import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PackingList from './PackingList.jsx'

function App(){
  return (
    <main>
      <PackingList />
    </main>
  )
}

/*
THE LESSON 

// an example 
// this is pretty cool...
function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard","Chupacabra","Bigfoot","Nessie","Snallygaster"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
  return (
    <div>
      <h1>Animals: </h1>
      <ul 
        style=
        {{
          textAlign: 'left',
          width: '150px'
        }}
      >
        {animalsList}
      </ul>
    </div>
  );
}

// ...but this is way cooler...
// rendering a list of components
function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {

  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals!  Sad!</div>;
  }  

  return (
    <ul
        style= 
        {{
          textAlign: 'left',
          width: '150px'
        }}    
    >
      {props.animals.map((animal) => {
        // return <ListItem key={animal} animal={animal} />;
        // return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;

        return animal.startsWith("L") && <li key={animal}>{animal}</li>;

      })}
    </ul>
  );
}
function App() {
  // const animals = ["Lyger", "Cow", "Snake", "Lizard","Chupacabra","Bigfoot","Nessie","Snallygaster","Larry"];
  const animals = [];

  // <List /> when you don't specify animals= prop, will display "Loading..."
  return (
    <div>
      <h1>Animals!</h1>
      <List animals={animals} />
    </div>
  );
}
*/

export default App
