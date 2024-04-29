import React, { useState } from "react";
import "./App.css";
import OneDigit from "./OneDigit";
import TwoDigit from "./TwoDigit";
import { Container, Button } from "react-bootstrap";
function App() {
    const [whichButton, setWhichButton] = useState(true);
    return (
        <Container>
            <Button
                onClick={() => setWhichButton(true)}
                variant="primary"
                className="m-2"
            >
            {whichButton === true ? <OneDigit /> : <TwoDigit />}
        </Container>
    );
}

export default App;
