import "./App.css";
import OneDigit from "./OneDigit";
import TwoDigit from "./TwoDigit";
import { Container } from "react-bootstrap";
function App() {
    return (
        <Container>
            <OneDigit />
            <TwoDigit />
        </Container>
    );
}

export default App;
