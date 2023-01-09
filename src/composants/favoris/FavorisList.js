import React from "react";
import { useSelector } from "react-redux";
import { PokeCard } from "../PokeCard";
import { Grid } from "@mui/material";

const FavorisList = () => {
  const cards = useSelector((state) => state.ComposantFavoris);
  if (cards.length === 0) {
    return (
      <div>
        <h1> Pas de pokemons favoris </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1> Vos pokemons favoris </h1>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          margin="2%"
        >
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <Grid item xs={3}>
                <PokeCard
                  name={card.name}
                  i={card.pokeNumber-1} 
                  offset={0}
                  id={card.id}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </div>
    );
  }
};

export default FavorisList;