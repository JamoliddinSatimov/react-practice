
import React,{createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({children}) {
    const localData = JSON.parse(localStorage.getItem("theme"))
    const [theme , setTheme] = useState(localData||false)

    useEffect(()=>{
        localStorage.setItem("theme", JSON.stringify(theme))
    },[theme])
  return ( 
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
