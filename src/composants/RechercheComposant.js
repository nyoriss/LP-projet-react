import { Autocomplete, TextField, Button, Grid } from '@mui/material';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function RechercheComposant() {
    const url = `https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=905`;
    const [tabPokemons, setTabPokemons] = useState([0]);

    let tempTabPokemon = []
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let i = 1
          data.results.forEach(element => {
            let nom = i+" "+element.name
            tempTabPokemon.push(nom)
            i++
          });
          setTabPokemons(tempTabPokemon)
          console.log(tempTabPokemon)
      });
    }, [])

    console.log("dans composant recherche")
    const navigate = useNavigate();

    const handlePokemon = () => {
      let searchBar = document.querySelector("#searchPokemon")
      let numPoke = searchBar.getAttribute("value").split(" ")[0]
      console.log("valeur recherche : " + numPoke)
      navigate(`pokemon/`+numPoke);
    };

    return ( 
        <div>
            <Grid>
                <Autocomplete
                    disablePortal
                    id="searchPokemon"
                    options={tabPokemons}
                    sx={{ width: 300, height: 50 }}
                    renderInput={(tabPokemons) => <TextField{...tabPokemons}  label="Pokemon" />}
                />
                <Button variant="contained" color="success" id="bouton" height="50px" onClick={handlePokemon}>
                    {"->"}
                </Button>
            </Grid>
        </div>
    )
}