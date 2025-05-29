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

export interface UserForm {
    uid?: string,
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

export interface IUserProps {
    uid: string,
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    last_access: string
}