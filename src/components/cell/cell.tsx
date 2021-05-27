import * as React from "react";
import { Coordinates } from "src/util/coordinates";

import "./cell.css";

type Props = {
    coordinates: Coordinates;
};

export function Cell({ coordinates }: Props): React.ReactElement {
    return (
        <div className="cell">
            ({coordinates.x}, {coordinates.y})
        </div>
    );
}
