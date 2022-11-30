import {Box, Grid} from '@mui/material';
export function PokeCard({i, offset, name, tabImg}) {
    return (
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
            href={`../pokemon/${i+1+offset}` 
        }>
            <center>
                <div style={{width: '154px', backgroundImage: 'url("/assets/pokeball_fond.png")', border: '1px solid black'}} key={i} >
                    <p>{i+1+offset} : {name}</p>
                    <img src={tabImg[i]} href={tabImg[i]} ></img>
                    <br/>
                </div>
            </center>
        </a>
        </Box>
    </Grid>
)}