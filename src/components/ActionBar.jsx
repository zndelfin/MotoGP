import { Typography, Box, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function ActionBar(){
    return (
        <Box className="actionBar" sx={{display:"flex", flexDirection:"row", height:"45px"}}>
            <Typography variant="h4" pl={3} sx={{borderLeft:"20px solid orange", borderBottom:"5px solid orange"}}>Honda</Typography>
            <Typography> <IconButton> <AddIcon fontSize="small"/> </IconButton></Typography>
            <Typography><IconButton><AutorenewIcon fontSize="small"/> </IconButton></Typography>
        </Box>
    )  
}


