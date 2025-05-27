import { createContext, useContext, useState } from "react"
import Parse from 'parse';
import type { AuthForm } from "../utils/interfaces";
import { useLog } from "./log";

interface IBack4AppContext {
    logged: boolean,
    register(
        event: React.FormEvent<HTMLFormElement>,
        formState: AuthForm
    ): void,
    login(
        event: React.FormEvent<HTMLFormElement>,
        formState: AuthForm
    ): void,
    logout(): void
}

const Back4AppContext = createContext<IBack4AppContext>({} as IBack4AppContext)

const Back4AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const { activeNotification, setNotificationContent } = useLog()

    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('logged')
        return !!isLogged
    })

    const register = async (
        event: React.FormEvent<HTMLFormElement>,
        formState: AuthForm
    ) => {
        try {
            event.preventDefault()

            const user = new Parse.User()

            user.set('username', formState.name)
            user.set('email', formState.email)
            user.set('password', formState.password)

            const response = await user.signUp()
            console.log(response)

            // setLogged(true)
            // localStorage.setItem('logged', 'true')

            // activeNotification('success')
            // setNotificationContent({
            //     title: 'Usuário criado com sucesso!',
            //     message: ''
            // })
        } catch (error) {
            console.log(error)
            activeNotification('error')
            setNotificationContent({
                title: 'Erro ao criar usuário',
                message: `register() ${String(error)}`
            })
        }
    }

    const login = async (
        event: React.FormEvent<HTMLFormElement>,
        formState: AuthForm
    ) => {
        try {
            event.preventDefault()

            const response = await Parse.User.logIn(formState.email, formState.password)
            console.log(response)

            setLogged(true)
            localStorage.setItem('logged', 'true')

            activeNotification('success')
            setNotificationContent({
                title: 'Usuário Logado com sucesso!',
                message: ''
            })
        } catch (error) {
            activeNotification('error')
            setNotificationContent({
                title: 'Erro ao criar usuário',
                message: `register() ${String(error)}`
            })
        }
    }

    const logout = () => {
        setLogged(false)
        localStorage.removeItem('logged')
    }

    return (
        <Back4AppContext.Provider value={{
            logged,
            register,
            login,
            logout
        }}>
            { children }
        </Back4AppContext.Provider>
    )
}

function useBack4App(): IBack4AppContext {
    const context = useContext(Back4AppContext)
    if (!context) {
        throw new Error('useBack4App must be used whitin a Back4AppProvider')
    }
    return context
}

export { Back4AppProvider, useBack4App}