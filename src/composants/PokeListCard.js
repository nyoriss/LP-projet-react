import {Box, Grid} from '@mui/material';

export default function PokeListCard({isChecked, pokeNumber, name, id}) {
    const urlImg =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
    const urlImgFin = `.png`
    console.log("dans pokeListCard")
    return (
        <div>
       <Grid item xs={3}>
        <Box component="div"
            sx={{
            width: 250,
            height: 200,
            '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            },
        }}>
        <a style={{ 
            color: '#000', 
            textDecoration: 'none', 
            verticalAlign: 'middle', 
            }} 
            href={`../pokemon/${pokeNumber}` 
        }>
            <center>
                <div style={{width: '154px', backgroundImage: 'url("/assets/pokeball_fond.png")', border: '1px solid black'}}>
                    <p>{pokeNumber} : {name}</p>
                    <img src={urlImg+pokeNumber+urlImgFin} href={urlImg+pokeNumber+urlImgFin} ></img>
                    <br/>
                </div>
            </center>
        </a>
        </Box>
    </Grid>
    </div> 
)}