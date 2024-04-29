import React, { useState } from "react";
import "./App.css";
import OneDigit from "./OneDigit";
import TwoDigit from "./TwoDigit";
import { Container, Button } from "react-bootstrap";
function App() {
    const [whichButton, setWhichButton] = useState("one");
    return (
        <Container>
            {whichButton === "one" ? (
                <Button variant="primary" onClick={() => setWhichButton("two")}>
                    Two Digit
                </Button>
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
