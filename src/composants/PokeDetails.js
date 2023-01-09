import {Box, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../store/redux";
import { useState, useEffect } from "react";

export function PokeDetails({urlImageOfficialPokemon, numeroPokemon, nomPokemon, nomPokemonFr, descPokemon, type1, type2}) {
  const [isChecked, setIsChecked] = useState(0); //checked
  const [isFav, setIsFav] = useState();

  const dispatch = useDispatch();
  const favorisState = useSelector((state) => state.ComposantFavoris);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  const imageUrlFin = `.png`

  useEffect(() => {
      let include = favorisState.find((card) => card.name === nomPokemon);
      if (include) {
        setIsChecked(true);
      }
      if (!!isChecked) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
  });

    const handleFavori = (event) => {
      if(!isChecked) {
        setIsChecked(true);
        dispatch(
          addCard({
            id: numeroPokemon,
            name: nomPokemon,
            pokeNumber: numeroPokemon,
            isChecked: true,
          })
        );
        console.log("pokemon ajouté aux favoris");
      } else {
        if (window.location.href.includes("HomePage")) {
          dispatch(removeCard(nomPokemon));
        } else {
          setIsChecked(false);
          dispatch(removeCard(nomPokemon));
          console.log("pokemon supprimé des favoris");
        }
      }
    };
    return (
            <div style={{display: "flex", width: "60%", color: "white", fontSize: "20px"}}>
                <div id="divImage">
                  <img src={urlImageOfficialPokemon}></img>
                </div>
                <div id="divInfos" style={{alignSelf: "center", width: "475px"}}>
                <Box sx={{padding: '10px', height: '500px'}}>
                  <div style={{textAlign: "left"}}>
                    <p>{numeroPokemon} : {nomPokemonFr}</p>
                    <IconButton onClick={handleFavori}>
                      {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <p>{nomPokemon} (anglais)</p>
                    <p>{descPokemon}</p>
                  </div>
                  <div>
                    <img src={"/assets/"+type1+"_type.png"} alt=""></img>
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    <img src={"/assets/"+type2+"_type.png"} alt=""></img>
                  </div>
                </Box>
              </div>
            </div>
  )}