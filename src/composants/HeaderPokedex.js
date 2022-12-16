import {Button, Box} from '@mui/material';
import { useNavigate } from "react-router-dom";


export function HeaderPokedex() {
    const navigate = useNavigate();

    const handleHome = () => {
        console.log("depuis headerPokedex")
        navigate(`/`);
      };

    return (
            <div>
                <Box>
                    <Button variant="contained" color="success" style={{margin: "10px"}} onClick={handleHome}>
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