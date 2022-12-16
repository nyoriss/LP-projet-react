import {Button, Box} from '@mui/material';
import { useNavigate } from "react-router-dom";

export function HeaderPokemon(numeroPokemon, nomPokemonFr) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`../pokedex/${parseInt(parseInt((numeroPokemon-1)/20)*20)}`);
      };

    return (
            <div>
                <Box
                    sx={{
                        backgroundColor: 'primary.dark',
                }}>
                    <Button style={{ color: '#000', textDecoration: 'none', margin: '10px'}}  onClick={handleNavigate}>
                        {"Retour au pokedex"}
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