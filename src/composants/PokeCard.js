import {Box, Grid, IconButton} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../store/redux";
import { useState, useEffect } from "react";

export function PokeCard({i, offset, name, tabImg, checked}) {

    const [isChecked, setIsChecked] = useState(checked);
    const [isFav, setIsFav] = useState();

    const dispatch = useDispatch();
    const favorisState = useSelector((state) => state.ComposantFavoris);
  
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
              id: i,
              name: name,
              pokeNumber: i+1+offset,
              isChecked: true,
            })
          );
          console.log("ajouté aux favoris");
        } else {
          if (event.target.baseURI.includes("HomePage")) {
            dispatch(removeCard(name));
          } else {
            setIsChecked(false);
            dispatch(removeCard(name));
            console.log("suprimé des favoris");
          }
        }
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
          {isFav ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
        <a style={{ 
            color: '#000', 
            textDecoration: 'none', 
            verticalAlign: 'middle', 
            }} 
            href={`../pokemon/${i+1+offset}` 
        }>
            <center>
                <div style={{width: '154px', backgroundImage: 'url("/assets/pokeball_fond.png")', border: '1px solid black'}} key={i} >
                    <p>{i+1+offset} : {name}</p>
                    <img src={tabImg[i]} href={tabImg[i]} ></img>
                    <br/>
                </div>
            </center>
        </a>
        </Box>
    </Grid>
)}