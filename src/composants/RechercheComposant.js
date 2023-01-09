import { Autocomplete, TextField, Button, Grid } from '@mui/material';
import { useEffect, useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export function RechercheComposant() {
  const url = `https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=905`;
  const [tabPokemons, setTabPokemons] = useState([0]);

  const tabPokemonsMemo = useMemo(() => {
    let tempTabPokemon = [];
    let i = 1;
    return axios.get(url).then((response) => {
      response.data.results.forEach((element) => {
        let nom = `${i} ${element.name}`;
        tempTabPokemon.push(nom);
        i++;
      });
      return tempTabPokemon;
    });
  }, []);

  useEffect(() => {
    tabPokemonsMemo.then((tempTabPokemon) => {
      setTabPokemons(tempTabPokemon);
    });
  }, [tabPokemonsMemo]);

  console.log("dans composant recherche");
  const navigate = useNavigate();

  const handlePokemon = () => {
    let searchBar = document.querySelector("#searchPokemon")
    let numPoke = searchBar.getAttribute("value").split(" ")[0];
    console.log(`valeur recherche : ${numPoke}`);
    navigate(`pokemon/${numPoke}`);
  };

  return (
    <center>
      <div style={{display:"flex", justifyContent: "center"}} width="400">
          <Autocomplete
            disablePortal
            id="searchPokemon"
            options={tabPokemons}
            sx={{ width: 300, height: 50 }}
            renderInput={(tabPokemons) => (
              <TextField {...tabPokemons} label="Pokemon" />)}
          />
          &#160;&#160;&#160;&#160;&#160;
          <Button variant="contained" color="success" id="bouton" height="50px" onClick={handlePokemon}>
            {"->"}
          </Button>
      </div>
    </center>
  )
}
