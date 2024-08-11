

import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Counter from "./components/Counter";

function App(){ 
    return(
        //to yha dekho themeprovider parent hai aor jo bhi 
        //children hai iske ander vo direct themeprovider func me chle jayenge
        <ThemeProvider>
            <div className="App">
                <h1>Counter App with Theme</h1>
                <ThemeToggle/>
                <Counter/>
            </div>
        </ThemeProvider>
    )
}

export default App;
