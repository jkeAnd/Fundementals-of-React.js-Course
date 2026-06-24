// Assignment 3 //
import { createContext,  useState } from "react";
// Make a box that contains the shared value 
const ThemeContext = createContext();


//provider = controls the theme 

 export function ThemeProvider({children}) {

    const [theme, setTheme]  = useState("light"); // default = light

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    // put everying together 
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}


export default ThemeContext;