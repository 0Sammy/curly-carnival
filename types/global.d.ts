//Home 
declare type FormState = {
    email: string;
    level: string;
    quantity: string;
    airdrop: string;
    network: string;
    address: string;
    setField: (field: keyof Omit<FormState, 'setField'>, value: string) => void;
}

//Drawer Component
declare type DrawerProps = {
    isOpen: boolean
    onClose?: () => void
    children: ReactNode
    className?: string
}
