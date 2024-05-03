import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import ToggleSection from "./component/ToggleSection";
import FetchComponent from "./component/FetchComponent";
import FetchReservations from "./component/FetchReservations";

function App() {
  return (
    <Container>
      <h1 className="text-center">A simple react-testing Example</h1>
      <ToggleSection />
      <FetchComponent />
      <FetchReservations />
    </Container>
  );
}

export default App;
