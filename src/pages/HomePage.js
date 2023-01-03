import { Autocomplete, TextField, Button } from '@mui/material';
import { useEffect, useState } from "react";
import FavorisList from '../composants/favoris/FavorisList';
import { HeaderHome } from "../composants/HeaderHome"
import { RechercheComposant } from '../composants/RechercheComposant';
import { useNavigate } from "react-router-dom";

export function HomePage() {
    let numRandom = Math.floor(Math.random() * 905)+1;
    const url = `https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=905`;
    const [tabPokemons, setTabPokemons] = useState([0]);
    const [numeroPokemon, setNumeroPokemon] = useState([0]);

    document.body.style.backgroundImage = `url("/assets/pokemon-background-4.jpg")`;
    document.body.style.backgroundSize = "100% 255%";

    //autre possibilité d'image
    /*document.body.style.backgroundImage = `url("/assets/pokemon-background-1.png")`;
    document.body.style.backgroundSize = "100% 260%";*/

    const navigate = useNavigate();

    const handlePokedex = () => {
      navigate(`pokedex/0`);
    };

    const handleRandomPoke = () => {
      navigate(`pokemon/${numRandom}`);
    };

    return (
      <div id="sidebar">
        <center>
            <HeaderHome></HeaderHome>
            <div>
              <RechercheComposant/>
              <br/><br/>
              <Button variant="contained" color="error" onClick={handlePokedex}>
                Pokédex
              </Button>
              <br/><br/>
              <Button variant="contained" color="warning" onClick={handleRandomPoke}>
                Pokemon aléatoire
              </Button>
            </div>
           <FavorisList/>
        </center>
      </div>
    )
}
