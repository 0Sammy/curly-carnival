//Home 
declare type FormState = {
    email: string;
    level: string;
    quantity: string;
    airdrop: string;
    network: string;
    address: string;
    option: string;
    isChecked: boolean;
    isCorrect: boolean;
    setField: <K extends keyof Omit<FormState, 'setField'>>(field: K, value: FormState[K]) => void;
}

//Drawer Component
declare type DrawerProps = {
    isOpen: boolean
    onClose?: () => void
    children: ReactNode
    className?: string
}

//Email
declare type EmailProps = {
    email: string;
    level: string;
    quantity: string;
    airdrop: string;
    network: string;
    address: string;
}
