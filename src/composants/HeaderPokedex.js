import {Button, Box} from '@mui/material';

export function HeaderPokedex() {
    return (
            <div>
                <Box>
                    <Button variant="contained" color="success" style={{margin: "10px"}} href={`/`}>
                        ← Retour au menu principal
                    </Button>
                    <center>
                    <div>
                        <h1>Le Pokedex :</h1>
                    </div>
                    <br/>
                    </center>
                </Box>
                <br/>
            </div>
    )}