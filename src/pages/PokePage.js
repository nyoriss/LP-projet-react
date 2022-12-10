import { useEffect, useState } from "react";
import { Button, Box } from '@mui/material';
import { PokeDetails } from '../composants/PokeDetails'
import { NavLink } from "react-router-dom";
import { BookMarkListComposant } from "../composants/BookMarkListComposant";

export function PokePage() {

  const imagePixelUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  const imageOfficialUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`
  const imageUrlFin = `.png`

  let urlPage = window.location.href.split("/")
  let numeroPokemon = urlPage[urlPage.length-1];

  const urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${numeroPokemon}`;
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`;
  const urlNomFr = `https://pokeapi.co/api/v2/pokemon-species/${numeroPokemon}/`

  let urlImagePixelPokemon = imagePixelUrl+numeroPokemon+imageUrlFin
  let urlImageOfficialPokemon = imageOfficialUrl+numeroPokemon+imageUrlFin

  const [nomPokemon, setNomPokemon] = useState(0);
  const [nomPokemonFr, setNomPokemonFr] = useState(0);
  const [descPokemon, setDescPokemon] = useState(0);
  const [typesPokemon, setTypesPokemon] = useState([0])

  useEffect(() => {
    fetch(urlSpecies)
        .then((response) => response.json())
        .then((data) => {
            setNomPokemon(data.name);
            let trouve = false        
            data.flavor_text_entries.forEach(element => {
            if(element.language.name == "fr" && !trouve) {
                trouve = true
                //console.log(element.flavor_text)
                setDescPokemon(element.flavor_text)
            }
            });
        });

    fetch(urlPokemon)
        .then((response) => response.json())
        .then((dataPoke) => {
            let tempTabTypes = []
            dataPoke.types.forEach(type => {
                tempTabTypes.push(type.type.name)
                //console.log(type.type.name)
            });
            setTypesPokemon(tempTabTypes)
    });

    fetch(urlNomFr)
    .then((response) => response.json())
    .then((dataPoke) => {
        //console.log(dataPoke.names[4].name)
        setNomPokemonFr(dataPoke.names[4].name)
    })
  }, [numeroPokemon])
  document.body.style.backgroundImage = `url("/assets/pokeball_fond.png")`
  document.body.style.backgroundSize = "100% 100%"; 
  console.log("page chargée");
  console.log(numeroPokemon)


    return (
      <div >
            <Box
                sx={{
                backgroundColor: 'primary.dark',
            }}>
                <Button variant="contained" color="success" style={{ color: '#000', textDecoration: 'none', margin: '10px'}} 
                    href={`../pokedex/${parseInt(parseInt((numeroPokemon-1)/20)*20)}`}>
                    ← Retour au pokedex
                </Button> 
                <center>
                    <div>
                        <h1>Page de {nomPokemonFr}</h1>
                    </div>
                    <br/>
                </center>
            </Box>
            <br/>
        <center>
            <PokeDetails urlImageOfficialPokemon={urlImageOfficialPokemon} 
                         numeroPokemon={numeroPokemon} 
                         nomPokemon={nomPokemon} 
                         nomPokemonFr={nomPokemonFr}  href={`../pokemon/${numeroPokemon==1? 1 : parseInt(numeroPokemon)-1}`}
                         descPokemon={descPokemon}
                         type1={typesPokemon[0]}
                         type2={typesPokemon[1]}>
            </PokeDetails>
            <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokemon/${numeroPokemon==1? 1 : parseInt(numeroPokemon)-1}`}>
                    {"<< précédent"}
            </Button>
            &#160;&#160;&#160;&#160;&#160;
            <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokemon/${numeroPokemon>=905? 905 : parseInt(numeroPokemon)+1}`}> 
                    {"suivant >>"}
            </Button>
            <BookMarkListComposant numeroPokemon={numeroPokemon}></BookMarkListComposant>
        </center>
      </div>
    );
  }
