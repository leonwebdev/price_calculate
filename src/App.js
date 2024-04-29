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
                onClick={() =>
                    setWhichButton((prev) => {
                        return !prev;
                    })
                }
                variant="danger"
                style={{
                    position: "fixed",
                    bottom: "2rem",
                    right: "2rem",
                    zIndex: 1000,
                }}
            >
                <i className="bi bi-shuffle"></i>
            </Button>
            {whichButton === true ? <OneDigit /> : <TwoDigit />}
        </Container>
    );
}

export default App;
