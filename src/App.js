// import React from 'react';
import './App.css';

import CharacterCard from './CharacterCard';
const word = "Hello";
function App() {
  return (
    <div>
      {
        Array.from(word).map((c, i) => <CharacterCard key={i} value={c} />)
      }
    </div>
  );
}

export default App;
