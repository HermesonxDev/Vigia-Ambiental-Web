import { createContext, useContext } from "react"
import Parse from 'parse';
import type { SignUpForm } from "../utils/interfaces";
import { useLog } from "./log";

interface IBack4AppContext {
    register(
        event: React.FormEvent<HTMLFormElement>,
        formState: SignUpForm
    ): void
}

const Back4AppContext = createContext<IBack4AppContext>({} as IBack4AppContext)

const Back4AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const { activeNotification, setNotificationContent } = useLog()

    const register = async (
        event: React.FormEvent<HTMLFormElement>,
        formState: SignUpForm
    ) => {
        try {
            event.preventDefault()

            const user = new Parse.Object('users')

            user.set('username', formState.name)
            user.set('email', formState.email)
            user.set('password', formState.password)

            await user.save()
            // const result = await user.save()

            activeNotification('success')
            setNotificationContent({
                title: 'Usuário criado com sucesso!',
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

    return (
        <Back4AppContext.Provider value={{ register }}>
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