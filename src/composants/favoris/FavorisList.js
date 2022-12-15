import React from "react";
import { useSelector } from "react-redux";
import PokeListCard from "../PokeListCard";
import { Grid } from "@mui/material";

const FavorisList = () => {
  const cards = useSelector((state) => state.ComposantFavoris);
  console.log("cards : "+cards)
  if (cards.length === 0) {
    return (
      <div>
        <h1> Equipe de favoris vide </h1>
      </div>
    );
  } else {
    return (
      <div>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          margin="2%"
        >
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <Grid item xs={3}>
                <PokeListCard
                  isChecked={card.isChecked}
                  name={card.name}
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