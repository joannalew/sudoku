import "./normalize.css";
import { Grid } from "./grid/grid";
import * as React from "react";

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
