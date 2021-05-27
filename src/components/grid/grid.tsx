import * as React from "react";
import { Section } from "../section/section";

import "./grid.css";

export function Grid(): React.ReactElement {
    return (
        <div className="grid">
            <Section coordinates={{ x: 0, y: 0 }} />
            <Section coordinates={{ x: 0, y: 3 }} />
            <Section coordinates={{ x: 0, y: 6 }} />
        </div>
    );
}
