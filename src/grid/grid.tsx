import * as React from "react";
import { Section } from "../section/section";

import "./grid.css";

export function Grid() {
    return (
        <div className="grid">
            <Section />
            <Section />
            <Section />
        </div>
    );
}
