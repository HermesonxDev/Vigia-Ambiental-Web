import {
    createContext,
    useContext,
    //useState
} from "react"

interface IAuthContext {
    logged: boolean
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    // const [logged, setLogged] = useState<boolean>(() => {
    //     const isLogged = localStorage.getItem('logged')
    //     return !!isLogged
    // })

    // setLogged(false)

    const logged = false
    
    return (
        <AuthContext.Provider value={{ logged }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}

export { AuthProvider, useAuth }