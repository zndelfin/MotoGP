import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Card from "./components/Card";
import ActionBar from "./components/ActionBar";
import { Box, Container } from "@mui/system";
import riders from "./riders";

function createRiderCard(riders){
  return (
    <Card 
      key={riders.id}
      name={riders.name}
      team={riders.team}
    />
  );
}

export default function App() {
  return (
    <Container className="container" >
      <Header />
      <Box mt={10} sx={{display:"flex", flexDirection:"row"}}>
        <Menu />
        <Box ml={2} sx={{}}>
          <ActionBar />
        <Box> {riders.map(createRiderCard) }</Box>
        </Box>
      </Box>
    </Container>
  );
}
