import {Box, Grid, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../store/redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function PokeCard({i, offset, name}) { //, checked

    const [isChecked, setIsChecked] = useState(0); //checked
    const [isFav, setIsFav] = useState();

    const dispatch = useDispatch();
    const favorisState = useSelector((state) => state.ComposantFavoris);

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
    const imageUrlFin = `.png`

    useEffect(() => {
        let include = favorisState.find((card) => card.name === name);
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
              id: i+1+offset,
              name: name,
              pokeNumber: i+1+offset,
              isChecked: true,
            })
          );
          console.log("pokemon ajouté aux favoris");
        } else {
          if (window.location.href.includes("HomePage")) {
            dispatch(removeCard(name));
          } else {
            setIsChecked(false);
            dispatch(removeCard(name));
            console.log("pokemon supprimé des favoris");
          }
        }
      };

      const navigate = useNavigate();

      const handlePokemon = () => {
        navigate(`../pokemon/${i+1+offset}`);
      };
    
    return (
        <Grid item xs={3}>
        <Box component="div"
            sx={{
            width: 250,
            height: 200,
            '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            },
        }}>
            <IconButton onClick={handleFavori}>
              {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <center>
                <div style={{width: '154px', backgroundImage: 'url("/assets/pokeball_fond.png")', border: '1px solid black'}} key={i}>
                    <div onClick={handlePokemon} >
                      <p style={{ 
                          color: '#000', 
                          textDecoration: 'none', 
                          verticalAlign: 'middle', }} >
                        {i+1+offset} : {name}
                      </p>
                      <img src={imageUrl+(i+1+offset)+imageUrlFin} />
                      <br/>
                    </div>
                </div>
            </center>
        </Box>
    </Grid>
)}