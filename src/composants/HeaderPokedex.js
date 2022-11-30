import {Button, Box} from '@mui/material';
export function HeaderPokedex() {
    return (
            <div>
                <Box
                    sx={{
                    backgroundColor: 'primary.dark',
                }}>
                <Button variant="contained" color="success" href={`/`} style={{margin: "10px"}}>
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