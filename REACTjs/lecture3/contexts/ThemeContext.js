import React, { children, createContext, useState } from "react";

//const ThemeContext = createContext(); is a line of code in React that creates a new context object. This context object is used to share values across
// different components in a React application without having to pass props manually through every level of the component tree.

//The createContext() function is provided by React and is used to create a new context object.

//themecontext bhi hamne name hi diya hai baki createcontext ek predefined fun hai
const ThemeContext = createContext();



//to ye themeprovider parent hai and iske children counter and themetoggle hai


//to suno yha pe children use kiya hai taki ager kisi bhi component me hame usecontext() krke 
//yha defined values ko access karna chahe to kr skte hai  ookk

//ye children ke ander jo app.js me hamne counter and toggletheme use kiya hai vo aa rha hai to un sb me ham yha se pass ki gyi value use kr skte hai
const ThemeProvider = ({ children })=>{
    //by default the theme is light
    const [theme,setTheme] = useState("light");
    //to yha toggleTheme me t capital hai to themetoggle.js me bhi isi name 
    //se access karna pdega

    //this function sets the theme of the background
    const toggleTheme = () =>{
        setTheme((prevtheme)=>(prevtheme==="light"?"dark":"light"));
    };

    return (
        //themecontext hmara ek global background hai
        //aor children means jo bhi us global b.g me aayega

        //so themecontext provider basically iske childrens ke pass
        //without exporting ye values bhej rha hai jinhe 
        //iske children use kr skte hai 

        //theme ki initial value bhej di hai and change krne ke liye function bhi bhej diya hai

        //now ab value pass krne ke liye use fun_name.Provider value={{value to be passed}}
        //then just write {children } that's all aor last me themeprovider and context ko export
        //and jha bhi use karna hai 

        //to isko ek global variable hi man lo jise khi bhi use kr skte hai
        <ThemeContext.Provider value={{ theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext , ThemeProvider };









//In React, ThemeContext.Provider is used in the context API to provide a value to the component tree. Here’s a breakdown of what it does:

// Context API in React
// Context: The Context API allows you to share values (such as themes, user data, settings, etc.) between components without having to pass props through every level of the component tree.

// Creating Context:

// You create a context using createContext(). This function returns an object with two properties: Provider and Consumer.
// javascript
// Copy code
// import { createContext } from 'react';

// const ThemeContext = createContext();
// ThemeContext.Provider:

// ThemeContext.Provider is a component provided by the context object that allows you to supply a value to all components within its subtree. Any component inside this Provider can access the provided value via the context.
// javascript
// Copy code
// <ThemeContext.Provider value={/* some value */}>
//   {/* child components */}
// </ThemeContext.Provider>
// The value prop of Provider is the value you want to share with components in the tree. It can be a primitive value, an object, or a function.
