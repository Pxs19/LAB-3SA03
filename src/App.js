// import React from 'react';
// import CharacterCard from './CharacterCard';
import './App.css';



import WordCard from './WordCard';
const word = "Hello";
function App() {
  return (


      <div>

        <h1>
          Logic Game
        </h1>

  
            <WordCard value={word} />
 
      </div>


  );
}

export default App;
