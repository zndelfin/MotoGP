import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function MediaCard(props) {
  return (
    <Box sx={{ marginTop: "20px", marginBottom: "20px", width:"550px"}}>
    <Card sx={{ backgroundColor: "#F9F9F9"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.team}
        </Typography>
      </CardContent>
      <Box sx={{ color: "black"}}>
          <Button
            sx={{
              width: "50%",
              color: "black",
              textTransform: "none",
              border: "solid 1px #DCDCDC",
            }}
          >
            Delete
          </Button>

          <Button
            sx={{
              width: "50%",
              color: "black",
              textTransform: "none",
              border: "solid 1px #DCDCDC",
            }}
          >
            Edit
          </Button>
        </Box>
    </Card>
    </Box>
  );
}
