import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store/redux";
import { PokePage } from './pages/PokePage';
import { HomePage } from './pages/HomePage';
import { PokedexPage } from './pages/PokedexPage';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<HomePage/>}/>
            <Route path="/pokedex/:offset" element={<PokedexPage />} />
            <Route path="/pokemon/:pokemonId" element={<PokePage />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}


export default App;