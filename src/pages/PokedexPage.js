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

  const [tab, setTab] = useState([0]);
  const [tabImg, setTabImg] = useState([0]);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  const imageUrlFin = `.png`
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=${limite}`;

    let tempTab = [];
    let tempTabImg = [];

    console.log(url)

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        for(let i=0; i<limite; i++) {
          tempTab.push(data.results[i].name)
            let ii = i+1+offset;
            console.log(ii)
            console.log(imageUrl+""+ii+""+imageUrlFin)
            tempTabImg.push(imageUrl+""+ii+""+imageUrlFin)
        }
        setTab(tempTab)
        setTabImg(tempTabImg)
    });

  }, []);

  useEffect(() => {
    console.log(tab)
  }, [tab]);

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
            <div>
              <br/>
              <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokedex/0`}> 
                {"<<<< début"}   
              </Button>
              <a >&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</a>
              <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokedex/${offset==0? 0 : parseInt(offset)-20}`}> 
                {"<< précédent"}   
              </Button>
              <a >&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</a>
              <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokedex/${offset==880? 880 : parseInt(offset)+20}`}> 
                {"suivant >>"}
              </Button>
              <a >&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</a>
              <Button style={{ color: '#000', textDecoration: 'none'}} href={`../pokedex/880`}> 
                {"fin >>>>"}
              </Button>
              <div><br/></div>
            </div>
          </div>
        </center>
      </div>
    );
}

//pour avoir le nom des pokemon en anglais depuis une boucle dans pokemon-species
//console.log(i+1+' '+data.results[i].name) // en anglais


//pour avoir un nom en fr depuis pokemon-species/X
//data.names[4].name
// /!\ fetch dans un composant ou tableau de promesses

//export default tab;
