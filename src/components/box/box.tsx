import { Row } from "../row/row";
import * as React from "react";
import "./box.css";
import { Coordinates } from "../../util/coordinates";

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
