import React from "react";
import { ListGroup } from "react-bootstrap";
const TwoDigit = () => {
    // ? ----------------------------------------------------
    // * ----------------------------------------------------
    // ! ----------------------------------------------------
    // ----------------------------------------------------
    const previous_close_price = 53.71;
    // ----------------------------------------------------
    // ? ----------------------------------------------------
    // * ----------------------------------------------------
    // ! ----------------------------------------------------
    let from = -5.05;
    let data = [];
    for (let index = 0; index < 201; index++) {
        from += 0.05;
        data.push({
            percent: from,
            price: previous_close_price * (1 + from / 100),
        });
    }
    return (
        <ListGroup variant="flush">
            {data.map((item, index) => (
                <ListGroup.Item
                    key={index}
                    className={
                        // ---------------------------------------
                        // ---------------------------------------
                        // ---------------------------------------
                        // ! Danger Loss price --------------------
                        [0, 10, 20, 30, 40, 50, 60, 70, 80, 90].includes(index)
                            ? "text-danger bg-black fw-bold"
                            : [
                                  110, 120, 130, 140, 150, 160, 170, 180, 190,
                                  200, 210, 220, 230, 240, 250, 260, 270, 280,
                                  290,
                              ].includes(index)
                            ? "text-danger bg-primary-subtle fw-bold"
                            : // ---------------------------------------
                            // ---------------------------------------
                            // ---------------------------------------
                            // ? Previous close price --------------------
                            [100].includes(index)
                            ? "text-primary bg-danger-subtle fw-bold"
                            : // ---------------------------------------
                            // ---------------------------------------
                            // ---------------------------------------
                            // ? Buy price -------------------------------
                            [].includes(index)
                            ? "text-primary bg-warning fw-bold"
                            : ""
                    }
                >
                    {item.percent
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                    % ={" "}
                    {item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TwoDigit;
