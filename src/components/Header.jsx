import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import ReactLogo from "../assets/logo192.png"

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
      <img className="logo" src={ReactLogo} alt="React logo"/>
      <div className="headerTitle">
        <Box sx={{display:"flex", margin:" 0px 20px"}}>
        <Typography variant="h4" sx={{fontFamily:"Helvetica Neue"}}>Moto</Typography>
        <Typography variant="h4" sx={{fontFamily:"Helvetica Neue", color:"orange"}}>G</Typography>
        <Typography variant="h4" sx={{fontFamily:"Helvetica Neue", color:"red"}}>P</Typography>
        </Box>
      </div>
      </Toolbar>
    </AppBar>
  );
}
