import Box from '@mui/material/Box';

export function PokeDetails({urlImageOfficialPokemon, numeroPokemon, nomPokemon, nomPokemonFr, descPokemon, type1, type2}) {
    return (
            <div style={{display: "flex", width: "60%", color: "white", fontSize: "20px"}}>
                <div id="divImage">
                  <img src={urlImageOfficialPokemon}></img>
                </div>
                <div id="divInfos" style={{alignSelf: "center", width: "475px"}}>
                <Box sx={{padding: '10px', height: '500px'}}>
                  <div style={{textAlign: "left"}}>
                    <p>{numeroPokemon} : {nomPokemonFr}</p>
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