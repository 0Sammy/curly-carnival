"use client"

import { ToastContainer } from "react-fox-toast";

export default function ToastProvider({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ToastContainer isPausedOnHover={true} position={'top-center'} />
            {children}
        </div>
    );
}