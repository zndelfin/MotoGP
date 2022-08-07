import { Typography, Box, IconButton, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function ActionBar(){
    return (
        <Box className="actionBar" sx={{display:"flex", flexDirection:"row", height:"40px"}}>
            <Typography className="actionItems" variant="h4">Honda</Typography>
            <Typography className="actionItems"> <IconButton> <AddIcon fontSize="medium"/> </IconButton></Typography>
            <Typography className="actionItems"><IconButton><AutorenewIcon fontSize="medium"/> </IconButton></Typography>
        </Box>
    )  
}


