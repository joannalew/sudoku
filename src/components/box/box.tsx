import * as React from "react";
import { Row } from "src/components/row/row";
import { Coordinates } from "src/util/coordinates";

import "./box.css";

type Props = {
    coordinates: Coordinates;
};

export function Box({ coordinates }: Props): React.ReactElement {
    return (
        <div className="box">
            <Row coordinates={{ x: coordinates.x, y: coordinates.y + 0 }} />
            <Row coordinates={{ x: coordinates.x, y: coordinates.y + 1 }} />
            <Row coordinates={{ x: coordinates.x, y: coordinates.y + 2 }} />
        </div>
    );
}
