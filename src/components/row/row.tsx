import { Cell } from "../cell/cell";
import * as React from "react";

import "./row.css";
import { Coordinates } from "../../util/coordinates";

type Props = {
    coordinates: Coordinates;
};

export function Row({ coordinates }: Props): React.ReactElement {
    return (
        <div className="row">
            <Cell coordinates={{ x: coordinates.x + 0, y: coordinates.y }} />
            <Cell coordinates={{ x: coordinates.x + 1, y: coordinates.y }} />
            <Cell coordinates={{ x: coordinates.x + 2, y: coordinates.y }} />
        </div>
    );
}
