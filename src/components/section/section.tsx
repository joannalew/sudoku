import * as React from "react";
import { Box } from "src/components/box/box";
import { Coordinates } from "src/util/coordinates";

import "./section.scss";

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
