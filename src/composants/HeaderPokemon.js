import {Button, Box} from '@mui/material';
import { useNavigate } from "react-router-dom";

export function HeaderPokemon(props) {
    const numeroPokemon = props.numeroPokemon;
    const nomPokemonFr = props.nomPokemonFr;
    const navigate = useNavigate();

    const handlePokedex = () => {
        navigate(`../pokedex/${parseInt(parseInt((numeroPokemon-1)/20)*20)}`);
      };

    return (
        <div>
            <Box sx={{
                backgroundColor: '#ff0000',
            }}>
                <Button variant="contained" color="success" style={{ textDecoration: 'none', margin: '10px'}} 
                    onClick={handlePokedex}>
                    ← Retour au pokedex
                </Button> 
                <center>
                    <div>
                        <h1>Page de {nomPokemonFr}</h1>
                    </div>
                    <br/>
                </center>
            </Box>
            <br/>
        </div>
    )}