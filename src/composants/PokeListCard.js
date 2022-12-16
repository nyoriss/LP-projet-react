import {Box, Grid} from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function PokeListCard({pokeNumber, name, id}) {
    const urlImg =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
    const urlImgFin = `.png`

    const navigate = useNavigate();

    const handlePokemon = () => {
      navigate(`../pokemon/${pokeNumber}`);
    };
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
            onClick={handlePokemon}
        >
            <center>
                <div style={{width: '154px', backgroundImage: 'url("/assets/pokeball_fond.png")', border: '1px solid black'}}>
                    <p>{pokeNumber} : {name}</p>
                    <img src={urlImg+pokeNumber+urlImgFin}></img>
                    <br/>
                </div>
            </center>
        </a>
        </Box>
    </Grid>
    </div> 
)}