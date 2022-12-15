import {Box, Grid} from '@mui/material';

export default function PokeListCard({isChecked, name, id}) {
    const urlImg =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
    const urlImgFin = `.png`
    return (
        <div>
        <p>{name} et {id}  </p>
       {/* <Grid item xs={3}>
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
            href={`../pokemon/${id}` 
        }>
            <center>
                <div style={{width: '154px', backgroundImage: 'url("/assets/pokeball_fond.png")', border: '1px solid black'}}>
                    <p>{id} : {name}</p>
                    <img src={urlImg+id+urlImgFin} href={urlImg+id+urlImgFin} ></img>
                    <br/>
                </div>
            </center>
        </a>
        </Box>
    </Grid>*/}
    </div> 
)}