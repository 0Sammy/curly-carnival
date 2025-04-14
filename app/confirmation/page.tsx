"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Check, Loader2, Ban } from "lucide-react";

export default function Page() {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState<number>(5 * 60);
    const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            router.push("/processing");
        }
    }, [timeLeft, router]);

    useEffect(() => {
        const confirmationTimer = setTimeout(() => {
            setPaymentConfirmed(true);
        }, 2 * 60 * 1000);

        return () => clearTimeout(confirmationTimer);
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes}mins ${seconds.toString().padStart(2, "0")}secs`;

    return (
        <div className="flex flex-col justify-center items-center bg-white mx-auto p-6 max-w-md min-h-screen">
            <div className="space-y-8 w-full">
                <div className="mb-6 text-gray-600 text-center">
                    <p className="font-medium text-lg sm:text-xl">
                        We are confirming your transfer. This could take about {formattedTime}.
                    </p>
                    <p className="mt-2">Please do not refresh this page.</p>
                </div>

                <div className="flex justify-center my-8">
                    <div className="relative w-16 h-16">
                        <Loader2 className="w-full h-full text-yellow-400 animate-spin" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-gray-50 p-4 border border-gray-200 rounded-md">
                        <span className="text-gray-700">Payment made</span>
                        <div className="bg-green-100 p-1 rounded-full">
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center bg-gray-50 p-4 border border-gray-200 rounded-md">
                        <span className="text-gray-700">Payment confirmed</span>
                        {paymentConfirmed ? (
                            <div className="bg-red-100 p-1 rounded-full">
                                <Ban className="w-5 h-5 text-red-500" />
                            </div>
                        ) : (
                            <div className="w-5 h-5">
                                <Loader2 className="w-full h-full text-yellow-400 animate-spin" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}