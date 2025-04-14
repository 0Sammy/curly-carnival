"use client"

import { useState } from "react";
import { toast } from "react-fox-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";

//Icons and Images
import { ArrowLeft2, Copy, CopySuccess } from "iconsax-react";
import wallet from "../../public/wallet.jpg";

const Page = () => {

    const router = useRouter()
    const [copied, setCopied] = useState<boolean>(false);
    const WALLET_ADDRESS = "0xc2d06F4Ee7104A9B68ba1d24aE77c3a49121C5d0"

    //Functions
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(WALLET_ADDRESS);
            toast.success('Wallet address was copied to clipboard successfully!');
            setCopied(true);
            return true;
        } catch (err) {
            console.error('Failed to copy wallet to clipboard: ', err);
            toast.error('Failed to copy wallet to clipboard')
            return false;
        }
    }

    return (
        <main>
            <div className="items-center grid grid-cols-3 py-4 border-gray-200 border-b w-full">
                <ArrowLeft2 className="justify-self-start" size={20} />
                <p className="font-semibold text-xl sm:text-2xl">Deposit</p>
            </div>
            <div className="bg-[#F0F0F0] mx-auto mt-4 px-4 py-2 border border-gray-200 rounded-md w-[90%]">
                <p className="font-semibold text-base sm:text-lg">BNB CHAIN</p>
            </div>
            <p className="mt-6 ml-4 font-semibold text-darkGreen text-xs sm:text-sm">Network</p>
            <div className="bg-[#F0F0F0] mx-auto mt-2 px-4 py-2 border border-gray-200 rounded-md w-[90%]">
                <p className="font-semibold text-base sm:text-lg">BNB</p>
            </div>
            <p className="mt-6 ml-4 font-semibold text-darkGreen text-xs sm:text-sm">Deposit address</p>
            <Image src={wallet} alt="Wallet Image" className="mx-auto size-48" />
            <p className="mt-4 text-red-600 text-xs sm:text-sm text-center">This address only accepts deposits in BNB Smartchain</p>
            <section className="bg-[#F0F0F0] mt-6 px-4 py-8">
                <div className="flex justify-between gap-x-5">
                    <p className="break-all">{WALLET_ADDRESS}</p>
                    <div className="cursor-pointer shrink-0">
                        {copied ? <CopySuccess className="text-primaryGreen" /> : <Copy onClick={handleCopy} />}
                    </div>
                </div>
                <button onClick={() => router.push("/confirmation")} className={`bg-primaryGreen hover:bg-darkGreen duration-300 hover:text-white mt-4 font-medium disabled:cursor-not-allowed w-full py-3 rounded-md`}>I HAVE MADE A PAYMENT</button>
            </section>
        </main>
    );
}

export default Page;