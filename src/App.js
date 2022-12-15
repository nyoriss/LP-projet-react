import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import { ComposantListe } from './composants/ComposantListe';
import { PokePage } from './pages/PokePage';
import { HomePage } from './pages/HomePage';
import { PokedexPage } from './pages/PokedexPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<HomePage/>}/>
            <Route path="/pokedex/:offset" element={<PokedexPage />} />
            <Route path="/pokemon/:pokemonId" element={<PokePage />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;