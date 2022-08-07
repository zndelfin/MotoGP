import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Container } from "@mui/system";
import ActionBar from "./components/ActionBar";

export default function App() {
  return (
    <Container className="container">
      <Header />
      <div className="content">
        <Menu />
        <ActionBar />
      </div>
    </Container>
  );
}

