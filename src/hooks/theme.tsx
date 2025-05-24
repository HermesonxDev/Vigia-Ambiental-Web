import { createContext, useContext, useState } from "react";
import type { Theme } from "../utils/interfaces";

//import blue from "../styles/themes/blue";
import green from "../styles/themes/green";
//import neutral from "../styles/themes/neutral";

interface IThemeContext {
    theme: Theme
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme) {
            return JSON.parse(savedTheme)
        } else {
            return green
        }
    })

    setTheme(green)
    
    return (
        <ThemeContext.Provider value={{ theme }}>
            { children }
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider.")
    }
    return context
}

export { ThemeProvider, useTheme }