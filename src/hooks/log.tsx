import { createContext, useContext, useState } from "react";
import type { NotificationTypes, NotificationContent } from "../utils/interfaces";

interface ILogContext {
    showNotification: NotificationTypes,
    notificationContent: NotificationContent,
    setNotificationContent: React.Dispatch<React.SetStateAction<NotificationContent>>,
    activeNotification(notification: string): void,
    removeNotification(): void
}


/* CRIA O CONTEXTO PARA SER USADO NA APLICAÇÃO */
const LogContext = createContext<ILogContext>({} as ILogContext)


/*
* --> PROVÊ O CONTEXTO PARA A APLICAÇÃO
*      Guarda as funções e variáveis que podem ser chamadas e utilizadas em qualquer
*      canto da aplicação.
*/
const LogProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [showNotification, setShowNotification] = useState<NotificationTypes>({
        error: false,
        email: false,
        update: false,
        success: false
    })

    const [notificationContent, setNotificationContentState] = useState<NotificationContent>({
        title: '',
        message: ''
    })


    /*
    * --> GUARDA A MENSAGEM DE ERRO
    *      Recebe um array contendo title e message, e atribui a variavel notificationContent.
    */
    const setNotificationContent: React.Dispatch<React.SetStateAction<NotificationContent>> = (value) => {
        setNotificationContentState((prevState) => {
            const newValue = typeof value === 'function' ? value(prevState) : value
            return newValue
        });
    };


    /*
    * --> ATIVA A NOTIFICAÇÃO DE ERRO
    *      Atribui o valor true a variavel setShowErrorNotification que decide
    *      se a notificação vai ser exibida.
    */
    const activeNotification = (option: string) => {
        setShowNotification({
            error: false,
            email: false,
            update: false,
            success: false,
            [option]: true
        })
    }


    /*
    * --> DESATIVA A NOTIFICAÇÃO DE ERRO
    *      Atribui o valor false a variavel setShowErrorNotification que decide
    *      se a notificação vai ser exibida.
    */
    const removeNotification = () => {
        setShowNotification({
            error: false,
            email: false,
            update: false,
            success: false
        })
    }

    return (
        <LogContext.Provider value={{
            showNotification,
            notificationContent,
            setNotificationContent,
            activeNotification,
            removeNotification
        }}>
            { children }
        </LogContext.Provider>
    )
}


/*
* --> DA ACESSO AS FUNÇÕES E VARIÁVEIS DO CONTEXTO
*      Por meio de desestruturação é possivel acessar qualquer dado do contexto
*      ao instanciar a função abaixo.
*/
function useLog(): ILogContext {
    const context = useContext(LogContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context
}

export { LogProvider, useLog }