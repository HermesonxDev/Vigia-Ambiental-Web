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
        warning: string,
        fail: string
    }
}

export interface UserForm {
    uid?: string,
    name?: string,
    email: string,
    password: string
}

export interface ReportForm {
    reportingUserId: string | null | undefined,
    street: string,
    number: string,
    neighborhood: string,
    referencePoint: string,
    description: string
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

export interface IReportProps {
    id: string,
    description: string,
    neighborhood: string,
    number: string,
    referencePoint: string,
    reportingUserId: string,
    street: string,
    status: string,
    created_at: string,
    updated_at: string,
    deleted_at: string
}