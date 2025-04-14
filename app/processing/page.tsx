"use client"

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-fox-toast";

//Icons
import { ArrowLeft2, Clock } from "iconsax-react";

const Page = () => {
    
    const router = useRouter()
    const searchParams = useSearchParams()

    const shouldRedirect = searchParams.get("redirect") === "true"

    useEffect(() => {
        if (!shouldRedirect) return

        const timer = setTimeout(() => {
            toast.info("Redirecting...")
            router.push("/exchange")
        }, 60000)

        return () => clearTimeout(timer)
    }, [shouldRedirect])

    return (
        <main>
            <div className="items-center grid grid-cols-3 py-4 border-gray-200 border-b w-full">
                <ArrowLeft2 className="justify-self-start" size={20} />
                <p className="font-semibold text-xl sm:text-2xl">Withdrawal</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-5 my-20 p-4 text-center">
                <Clock size={40} variant="Bulk" className="text-primaryGreen" />
                <p>Your withdrawal request will be processed and your BNB will be credited automatically.</p>
                <p>
                    We highly appreciate your Time and care about the safety of your funds.
                    The request will be processed by our specialist with high priority within few minutes.
                </p>
                <p>
                    Contact Minereum support team via{" "}
                    <Link className="font-semibold text-darkGreen underline" href="https://t.me/MinereumAirdropOfficial" target="_blank">
                        Telegram
                    </Link>
                </p>
            </div>
        </main>
    )
}

export default Page
