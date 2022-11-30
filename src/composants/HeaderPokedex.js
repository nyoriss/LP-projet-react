import {Button, Box} from '@mui/material';
import { NavLink } from "react-router-dom";

export function HeaderPokedex() {
    return (
            <div>
                <Box
                    sx={{
                    backgroundColor: 'primary.dark',
                }}>
                <Button variant="contained" color="success" style={{margin: "10px"}}>
                    <NavLink to={`/`}> ← Retour au menu principal</NavLink>
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