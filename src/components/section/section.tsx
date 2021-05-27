import { Box } from "../box/box";
import * as React from "react";
import "./section.scss";
import { Coordinates } from "../../util/coordinates";

type Props = {
    coordinates: Coordinates;
};

export function Section({ coordinates }: Props): React.ReactElement {
    return (
        <div className="section">
            <Box coordinates={{ x: coordinates.x + 0, y: coordinates.y }} />
            <Box coordinates={{ x: coordinates.x + 3, y: coordinates.y }} />
            <Box coordinates={{ x: coordinates.x + 6, y: coordinates.y }} />
        </div>
    );
}
