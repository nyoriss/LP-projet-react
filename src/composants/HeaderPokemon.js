import {Button, Box} from '@mui/material';
export function HeaderPokemon(numeroPokemon, nomPokemonFr) {
    return (
            <div>
                <Box
                    sx={{
                    backgroundColor: 'primary.dark',
                }}>
                    <Button style={{ color: '#000', textDecoration: 'none', margin: '10px'}} href={`../pokedex/${parseInt(parseInt((numeroPokemon-1)/20)*20)}`}>
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