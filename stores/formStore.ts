import { create } from 'zustand';


export const useFormStore = create<FormState>((set) => ({
    email: '',
    level: '',
    quantity: '',
    airdrop: '',
    network: '',
    address: '',
    option: "v1",
    isChecked: false,
    isCorrect: false,
    setField: (field, value) => set((state) => ({ ...state, [field]: value })),
}));