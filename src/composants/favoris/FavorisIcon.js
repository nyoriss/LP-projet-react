import {IconButton} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addCard, removeCard } from "../../store/redux";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FavorisIcon = (numeroPokemon, nomPokemon) => {
    const [isFav, setIsFav] = useState();
    const [isChecked, setIsChecked] = useState(0);

    const dispatch = useDispatch();
    const favorisState = useSelector((state) => state.ComposantFavoris);

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
    <IconButton onClick={handleFavori}>
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>)
} 

export default FavorisIcon;