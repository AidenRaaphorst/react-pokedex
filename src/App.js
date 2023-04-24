import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import PokemonOverview from './PokemonOverview';

// TODO: Pokemon favourite

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonOverview />}/>
        <Route path="/pokemon-details" element={<PokemonDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
