import { useEffect, useState } from "react";
import { Grid, Container, Button} from '@mui/material';
import { PokeCard } from '../composants/PokeCard'
import { HeaderPokedex } from "../composants/HeaderPokedex";

export function PokedexPage() {
  let limite = 20;
  let urlPage = window.location.href.split("/")
  let offset = urlPage[urlPage.length-1];
  offset = parseInt(offset)
  console.log("offset : "+offset)

  document.body.style.backgroundImage = `url("/assets/pokemon-background-5.png")`;
  document.body.style.backgroundSize = "100% 100%"; 

  const [tab, setTab] = useState([0]);
  const [tabImg, setTabImg] = useState([0]);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  const imageUrlFin = `.png`
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=${limite}`;

    let tempTab = [];
    let tempTabImg = [];

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        for(let i=0; i<limite; i++) {
          tempTab.push(data.results[i].name)
            let ii = i+1+offset;
            tempTabImg.push(imageUrl+""+ii+""+imageUrlFin)
        }
        setTab(tempTab)
        setTabImg(tempTabImg)
    });

  }, []);
    return (
      <div>
        <HeaderPokedex></HeaderPokedex>
        <center>
          <div>
            <Container>
              <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {tab.map((name, i) => (
                    <div>
                      <PokeCard i={i} offset={offset} name={name} tabImg={tabImg} ></PokeCard>
                    </div>
                  ))}
              </Grid>
            </Container>
            <center>
              <div>
                <br/>
                <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokedex/0`}> 
                  {"<<<< début"}
                </Button>
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokedex/${offset==0? 0 : parseInt(offset)-20}`}> 
                  {"<< précédent"}
                </Button>
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokedex/${offset==880? 880 : parseInt(offset)+20}`}> 
                  {"suivant >>"}
                </Button>
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokedex/880`}> 
                  {"fin >>>>"}&#160;&#160;
                </Button>
                <div><br/></div>
              </div>
            </center>
          </div>
        </center>
      </div>
    );
}