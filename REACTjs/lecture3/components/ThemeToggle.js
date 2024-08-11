import React, { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {

    //to yha usecontext krke use kra hai and ye children hai to acess kr pa rha hai

    //yha dekho hamne toggletheme ko bhi use kiya hai taki jaise hi button click ho to ye function run ho jaye
    const { toggleTheme } = useContext(ThemeContext);
    return <button onClick={toggleTheme}>Toggle Theme</button>
};

export default ThemeToggle;
