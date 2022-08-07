// import React from 'react';
// import CharacterCard from './CharacterCard';
import './App.css';



import WordCard from './WordCard';
const word = "Hello";
function App() {
  return (


    <div>

      <body className='setContainer'>

        <h1>
          Logic Game
        </h1>

        <h2>
          <WordCard value={word} />
        </h2>


      </body>



  

    </div>


  );
}

export default App;
