import React from "react";
import { Stack, Button, ButtonGroup, Box, Typography } from "@mui/material";

export default function Menu() {
  return (
    <Box>
      <Stack>
      <Stack><Typography sx={{padding:"10px 0"}}>MENU</Typography></Stack>
        <ButtonGroup 
        variant="medium" 
        orientation="vertical" 
        disableRipple
        sx={{width:"300px"}}>
          <Button><Typography sx={{textTransform:"none", marginLeft:"-200px"}}>Honda</Typography></Button>
          <Button><Typography sx={{textTransform:"none", marginLeft:"-200px"}}>Yamaha</Typography></Button>
          <Button><Typography sx={{textTransform:"none", marginLeft:"-200px"}}>About</Typography></Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
