import { Cell } from "../cell/cell";
import * as React from "react";

import "./row.css";

export function Row() {
    return (
        <div className="row">
            <Cell />
            <Cell />
            <Cell />
        </div>
    );
}
