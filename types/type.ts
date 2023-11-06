export interface CustomButtonProps {
    title?: string;
    onClick?: () => void;
    containerStyles?:string;
    rightIcon?: React.ReactNode;
    textStyles?:string;
    disabled?:boolean;
}

export interface InputElementProps {
    label: string;
    placeholder: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SignUpData {
    [key: string]: string;
    name: string;
    email: string;
    password: string;
}
export interface LoginData {
    [key: string]: string;
    email: string;
    password: string;
}

export interface User {
    email: string
    name: string
    _id: string
}