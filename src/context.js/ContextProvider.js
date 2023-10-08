import {createContext, useState } from "react";



export const ThemeContext = createContext()

export function ContextProvider({children}) {

      
const [theme,setTheme] = useState("light");

  const handleTheme = () =>{

    setTheme (theme === "light" ? "dark" : "light")

  }

  return (
    <ThemeContext.Provider value={{theme,setTheme,handleTheme}}>
        {children}

    </ThemeContext.Provider>
  )
}