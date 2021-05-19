import { Row } from "../row/row";
import * as React from "react";
import "./box.css";

export function Box() {
    return (
        <div className="box">
            <Row />
            <Row />
            <Row />
        </div>
    );
}
