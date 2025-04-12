import { create } from 'zustand';


export const useFormStore = create<FormState>((set) => ({
    email: '',
    level: '',
    quantity: '',
    airdrop: '',
    network: '',
    address: '',
    setField: (field, value) => set((state) => ({ ...state, [field]: value })),
}));