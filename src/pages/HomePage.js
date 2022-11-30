import { Autocomplete, TextField, Button, Grid } from '@mui/material';
import { useEffect, useState } from "react";

export function HomePage() {
    let numRandom = Math.floor(Math.random() * 905)+1;
    const url = `https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=905`;
    const [tabPokemons, setTabPokemons] = useState([0]);
    const [numeroPokemon, setNumeroPokemon] = useState([0]);

    let tempTabPokemon = []
    let searchBar
    let searchButton
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          let i = 1
          data.results.forEach(element => {
            let nom = i+" "+element.name
            tempTabPokemon.push(nom)
            i++
          });
          setTabPokemons(tempTabPokemon)
      });
    }, [])

    window.addEventListener('load', function () {
      searchBar = document.querySelector("#searchPokemon")
      searchButton = document.querySelector("#bouton")
      setNumeroPokemon("1")
      searchButton.addEventListener('click', function() {
        let numPoke = searchBar.getAttribute("value").split(" ")[0]
        setNumeroPokemon(numPoke? numPoke:"1")
        console.log("bouton pressé "+ numeroPokemon)
      })

    })

    return (
      <div id="sidebar">
        <center>
            <h1>Bienvenue dans le monde des pokémon</h1>
            <br/><br/>
            <div>
                <Autocomplete
                    disablePortal
                    id="searchPokemon"
                    options={tabPokemons}
                    sx={{ width: 300, height: 50 }}
                    renderInput={(tabPokemons) => <TextField{...tabPokemons}  label="Pokemon" />}
                />
                <Button variant="contained" color="success" id="bouton" height="50px" href={`pokemon/`+numeroPokemon}>
                  {"->"}
                </Button>
              <br/><br/>
              <Button variant="contained" color="error" href={`pokedex/0`}>Pokédex</Button>
              <br/><br/>
              <Button variant="contained" color="warning" href={`pokemon/${numRandom}`}>Pokemon aléatoire</Button>
            </div>
        </center>
      </div>
    )
}