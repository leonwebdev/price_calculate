import "./App.css";
import { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
function App() {
    // ----------------------------------------------------
    // ----------------------------------------------------
    const previous_close_price = 12.07;
    // ----------------------------------------------------
    // ----------------------------------------------------
    let from = -3.1;
    let data = [];
    for (let index = 0; index < 61; index++) {
        from += 0.1;
        data.push({
            percent: from,
            price: previous_close_price * (1 + from / 100),
        });
    }
    return (
        <Container>
            <ListGroup variant="flush">
                {data.map((item, index) => (
                    <ListGroup.Item key={index}>
                        {item.percent
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                        % ={" "}
                        {item.price
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default App;
