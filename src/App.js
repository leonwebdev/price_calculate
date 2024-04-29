import React, { useState } from "react";
import "./App.css";
import OneDigit from "./OneDigit";
import TwoDigit from "./TwoDigit";
import { Container, Button } from "react-bootstrap";
function App() {
    const [whichButton, setWhichButton] = useState(true);
    return (
        <Container>
            {whichButton === true ? (
                <OneDigit />
            ) : (
                <Button variant="primary" onClick={() => setWhichButton("one")}>
                    One Digit
                </Button>
            )}
            {/*  */}
            <TwoDigit />
        </Container>
    );
}

export default App;
