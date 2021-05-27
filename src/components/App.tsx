import * as React from "react";

import { Grid } from "./grid/grid";

import "./normalize.css";

export default function App(): React.ReactElement {
    const [activeCell, setActiveCell] = React.useState<
        Array<number> | undefined
    >(undefined);

    const ActiveCellContext = React.createContext({
        activeCell,
        setActiveCell,
    });

    return (
        <ActiveCellContext.Provider value={{ activeCell, setActiveCell }}>
            <div className="App">
                <Grid />
            </div>
        </ActiveCellContext.Provider>
    );
}
