export interface Theme {
    title: string,
    colors: {
        primary: string,
        secondary: string,
        tertiary: string,
        white: string,
        black: string,
        gray: string,
        success: string,
        info: string,
        warning: string
    }
}

export interface AuthForm {
    name?: string,
    email: string,
    password: string
}

export interface NotificationTypes {
    error: boolean,
    email: boolean,
    update: boolean,
    success: boolean
}

export interface NotificationContent {
    title: string,
    message: string
}