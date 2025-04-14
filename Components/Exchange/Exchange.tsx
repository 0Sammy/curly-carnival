"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-fox-toast";

//Components and Stores
import { useFormStore } from "@/stores/formStore";
import Drawer from "../HomePage/Drawer";
import Loading from "./Loading";

//Icons
import { ArrowSwapVertical, Lock, Warning2, Unlock, Lock1, InfoCircle } from "iconsax-react";

const Exchange = () => {

    const router = useRouter();
    const { setField, isChecked, isCorrect } = useFormStore();
    const [newPage, setPage] = useState<string>("exchange");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [option, setOption] = useState<string>('v1');
    const [infoOpen, setInfoOpen] = useState<boolean>(false);
    const [codeValue, setCodeValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false)

    const PAGE = ["exchange", "buy", "sell", "deFi"];
    const CODES = ["A7G2D9", "E5B8F1C3", "T4S6N0U5", "I9H2L7K4M1J6", "W3O1P8Q2R7", "Z0V5X9Y3"];
    const v1Text = "Very fast! For beginners, it takes not less than 30 minutes and more to get the exchanging process done.";
    const v2Text = "Extreme! The process is very easy. Funds exchanged and deposited in a few minutes."

    //Functions
    const toggleOpen = () => setIsOpen((prev) => !prev)
    const handleOption = (newOption: string) => {
        setOption(newOption);
        setField("option", newOption)
    }
    const toggleInfo = () => setInfoOpen((prev) => !prev);
    const toggleLoading = () => setLoading((prev) => !prev);

    const handleNextStep = () => {
        toggleLoading();
        if (!CODES.includes(codeValue)) {
            toast.error("Invalid access code");
            toggleLoading();
            toggleOpen();
            return;
        }
        setField("isCorrect", true);
        toggleLoading();
        toggleOpen();
        setShowSuccess(true);
        const timer = setTimeout(() => {
            toast.success("Valid access code.")
            router.push("/processing?redirect=true")
        }, 10000)
        return () => clearTimeout(timer)

    }

    return (
        <main>
            {showSuccess && <Loading />}
            <Drawer isOpen={isOpen} onClose={toggleOpen} className="text-white">
                <p className="font-semibold text-lg sm:text-xl">Access Code</p>
                <input type="text" placeholder="Enter Access Code Here" value={codeValue} onChange={(event) => setCodeValue(event.target.value)} className="bg-inherit px-2 xl:px-4 py-3 border border-[#716A7C] focus:border-0 rounded-lg focus:outline focus:outline-primaryGreen w-full placeholder:text-[#A7A1AF] duration-300" />
                <button onClick={handleNextStep} disabled={loading} className={`${loading ? "bg-veryLightGreen" : "bg-primaryGreen hover:bg-darkGreen duration-300 hover:text-white"} font-medium disabled:cursor-not-allowed w-full py-3 rounded-3xl`}>
                    Apply
                </button>
            </Drawer>
            <div className="grid grid-cols-4 bg-[#F0F0F0] mx-auto my-6 px-4 sm:px-6 py-4 rounded-md w-[90%] text-center">
                {PAGE.map((page) => (
                    <p onClick={() => setPage(page)} key={page} className={`${page === newPage ? "font-semibold text-primaryGreen" : ""} capitalize cursor-pointer`}>{page}</p>
                ))}
            </div>
            <div className="flex flex-col gap-y-1 bg-[#F0F0F0] mx-auto px-4 sm:px-6 py-4 rounded-md w-[90%]">
                <p className="text-gray-400 text-xs sm:text-sm">You send</p>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-xl sm:text-2xl">MBSC</p>
                    <p className="font-semibold text-xl sm:text-2xl">0.0</p>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Minereum MNEB</p>
            </div>
            <ArrowSwapVertical size={18} className="z-[2] relative bg-white mx-auto -mt-4 p-2 border border-gray-200 rounded-[50%] size-fit" />
            <div className="flex flex-col gap-y-1 bg-[#F0F0F0] mx-auto -mt-4 px-4 sm:px-6 py-4 rounded-md w-[90%]">
                <p className="text-gray-400 text-xs sm:text-sm">You get</p>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-xl sm:text-2xl">BNB</p>
                    <p className="font-semibold text-xl sm:text-2xl">0.0</p>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Binance coin (BSC)</p>
            </div>
            <p className="mt-2 px-4 sm:px-6 py-4"><Warning2 variant="Bold" className="inline mr-1 text-red-600" size={24} />BNB on BNB chain network only. BNB sent via other networks cannot be processed or recovered.</p>
            <div className="mt-10">
                <section className="bg-[#F0F0F0] px-4 sm:px-6 py-4">
                    <button onClick={toggleOpen} className="flex items-center gap-x-1 mt-4 mb-8 font-semibold text-darkGreen">
                        <Lock size={16} />
                        <p>I have an access code</p>
                    </button>
                    <button onClick={() => handleOption("v1")} className={`${option === "v1" ? "border-2 border-darkGreen" : ""} w-full flex justify-between items-center bg-white px-4 sm:px-6 py-4 rounded-lg font-semibold text-deepBlack text-lg sm:text-xl`}>
                        <p className="flex items-center gap-x-1">{option === "v1" ? <Unlock size={20} /> : <Lock1 size={20} />} Blockchain V1</p>
                        <p>~50,000</p>
                    </button>
                    <p className="text-gray-400 text-xs sm:text-sm text-right">1647.67 BNB 0.50 BNB gas fee.</p>
                    <button onClick={() => handleOption("v2")} className={`${option === "v2" ? "border-2 border-darkGreen" : ""} w-full flex justify-between items-center bg-white px-4 sm:px-6 py-4 rounded-lg font-semibold text-deepBlack text-lg sm:text-xl mt-4`}>
                        <p className="flex items-center gap-x-1">{option === "v2" ? <Unlock size={20} /> : <Lock1 size={20} />} Blockchain V2</p>
                        <p>~150,000</p>
                    </button>
                    <p className="text-gray-400 text-xs sm:text-sm text-right">3295.35 BNB 5.0 BNB gas fee.</p>
                    <div className="flex gap-x-2 mt-4">
                        <InfoCircle onClick={toggleInfo} size={24} className="text-primaryGreen cursor-pointer shrink-0" variant="Bold" />
                        {infoOpen && <p className="bg-gray-300 p-2 rounded-lg text-xs sm:text-sm">{option === "v1" ? v1Text : v2Text}</p>}
                    </div>
                    <h1 className="mt-4 font-semibold sm:text-sm text-xl">Wallet Address</h1>
                    <div className="flex gap-x-2 mt-4">
                        <InfoCircle onClick={toggleInfo} size={24} className="text-red-600 cursor-pointer shrink-0" variant="Bold" />
                        <p className="text-xs sm:text-sm">The rates can change at any point due to market conditions, so you might receive more or less cryptocurrency than expected.</p>
                    </div>
                    <div className="flex items-center gap-x-1 mt-4">
                        <input type="checkbox" name="check" id="check" onChange={(event) => setField("isChecked", event.target.checked)} className="size-5" checked={isChecked} />
                        <label htmlFor="check" className="cursor-pointer">I agree to the Terms of Use, Privacy Policy.</label>
                    </div>
                    <button onClick={() => router.push("/payment")} disabled={!isChecked && !isCorrect} className={`${isChecked && isCorrect ? "bg-primaryGreen hover:bg-darkGreen duration-300 hover:text-white" : "bg-veryLightGreen"} mt-4 font-medium disabled:cursor-not-allowed w-full py-3 rounded-3xl`}>Next Step</button>
                </section>
            </div>
        </main>
    );
}

export default Exchange;