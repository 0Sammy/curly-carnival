"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-fox-toast";
import Image from "next/image";

//Components and Stores
import { useFormStore } from "@/stores/formStore";
import Drawer from "../HomePage/Drawer";
import Loading from "./Loading";

//Icons and Images
import caution from "../../public/caution.png";
import mbsc from "../../public/mbsc.png";
import bnb from "../../public/bnb.png";
import { ArrowSwapVertical, Lock, Unlock, Lock1, InfoCircle } from "iconsax-react";

const Exchange = () => {

    const router = useRouter();
    const { setField, isChecked, option } = useFormStore();
    const [newPage, setPage] = useState<string>("exchange");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [codeValue, setCodeValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    const PAGE = ["exchange", "buy", "sell", "deFi"];
    const CODES = ["A7G2D9", "E5B8F1C3", "T4S6N0U5", "I9H2L7K4M1J6", "W3O1P8Q2R7", "Z0V5X9Y3"];
    const v1Text = "For beginners, it takes not less than 30 minutes and more to get the exchanging process done.";
    const v2Text = "The process is very easy. Funds exchanged and deposited in a few minutes."

    //Functions
    const toggleOpen = () => setIsOpen((prev) => !prev)
    const handleOption = (newOption: string) => {
        setField("option", newOption)
    }
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
            <div className="grid grid-cols-4 bg-[#F0F0F0] mx-auto mb-6 px-4 sm:px-6 py-4 rounded-md w-[90%] text-center">
                {PAGE.map((page) => (
                    <p onClick={() => setPage(page)} key={page} className={`${page === newPage ? "font-semibold text-primaryGreen" : ""} capitalize cursor-pointer`}>{page}</p>
                ))}
            </div>
            <div className="flex flex-col gap-y-1 bg-[#F0F0F0] mx-auto px-4 sm:px-6 py-4 rounded-md w-[90%]">
                <p className="text-gray-400 text-xs sm:text-sm">You send</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-1">
                        <Image src={mbsc} alt="logo" className="size-7" />
                        <p className="font-semibold text-xl sm:text-2xl">MBSC</p>
                    </div>
                    <p className="font-semibold text-xl sm:text-2xl">{option === null ? "1" : option === "v1" ? "50,000" : option === "v2" ? "150,000" : "1"}</p>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Minereum MNEB</p>
            </div>
            <ArrowSwapVertical size={18} className="bg-white mx-auto -mt-4 p-2 border border-gray-200 rounded-[50%] size-fit" />
            <div className="-z-[2] relative flex flex-col gap-y-1 bg-[#F0F0F0] mx-auto -mt-4 px-4 sm:px-6 py-4 rounded-md w-[90%]">
                <p className="text-gray-400 text-xs sm:text-sm">You get</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-1">
                        <Image src={bnb} alt="logo" className="size-7" />
                        <p className="font-semibold text-xl sm:text-2xl">BNB</p>
                    </div>
                    <p className="font-semibold text-xl sm:text-2xl">{option === null ? "0.039" : option === "v1" ? "1647.67" : option === "v2" ? "3295.35" : "0.039"}</p>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Binance coin (BSC)</p>
            </div>
            <p className="mt-2 px-4 sm:px-6 py-4"><Image src={caution} alt="Caution Icon" className="inline mr-1 size-5" />BNB on BNB chain network only. BNB sent via other networks cannot be processed or recovered.</p>
            <div className="mt-10">
                <section className="bg-[#F0F0F0] px-4 sm:px-6 py-4">
                    <button onClick={toggleOpen} className="flex items-center gap-x-1 mt-4 mb-8 font-semibold text-darkGreen">
                        <Lock size={16} />
                        <p>I have an access code</p>
                    </button>
                    <button onClick={() => handleOption("v1")} className={`${option === "v1" ? "border-2 border-darkGreen" : ""} w-full flex justify-between items-center bg-white px-4 sm:px-6 py-4 rounded-lg font-semibold text-deepBlack text-lg sm:text-xl`}>
                        <p className="flex items-center gap-x-1">{option === "v1" ? <Unlock size={20} /> : <Lock1 size={20} />} Blockchain V1</p>
                        <p className="font-medium text-sm sm:text-base italic">Very Fast</p>
                    </button>
                    <p className="text-xs sm:text-sm text-right">0.50 BNB gas fee.</p>
                    <button onClick={() => handleOption("v2")} className={`${option === "v2" ? "border-2 border-darkGreen" : ""} w-full flex justify-between items-center bg-white px-4 sm:px-6 py-4 rounded-lg font-semibold text-deepBlack text-lg sm:text-xl mt-4`}>
                        <p className="flex items-center gap-x-1">{option === "v2" ? <Unlock size={20} /> : <Lock1 size={20} />} Blockchain V2</p>
                        <p className="font-medium text-sm sm:text-base italic">Extreme</p>
                    </button>
                    <p className="text-xs sm:text-sm text-right">5.0 BNB gas fee.</p>
                    <div className="flex gap-x-2 mt-4">
                        <InfoCircle size={24} className="text-primaryGreen cursor-pointer shrink-0" variant="Bold" />
                        <p className="bg-gray-300 p-2 rounded-lg text-xs sm:text-sm">{option === "v1" ? v1Text : option === "v2" ? v2Text : "Kindly select an option to view more information about that option."}</p>
                    </div>
                    <h1 className="mt-4 font-semibold sm:text-sm text-xl">Wallet Address</h1>
                    <input type="text" placeholder="Enter Your Wallet Address" className="bg-inherit mt-4 px-2 xl:px-4 py-3 border border-[#716A7C] focus:border-0 rounded-lg focus:outline focus:outline-primaryGreen w-full placeholder:text-[#A7A1AF] duration-300" />
                    <div className="flex gap-x-2 mt-4">
                        <InfoCircle size={24} className="text-red-600 cursor-pointer shrink-0" variant="Bold" />
                        <p className="text-xs sm:text-sm">The rates can change at any point due to market conditions, so you might receive more or less cryptocurrency than expected.</p>
                    </div>
                    <div className="flex items-center gap-x-1 mt-4">
                        <input type="checkbox" name="check" id="check" onChange={(event) => setField("isChecked", event.target.checked)} className="size-5" checked={isChecked} />
                        <label htmlFor="check" className="cursor-pointer">I agree to the Terms of Use, Privacy Policy.</label>
                    </div>
                    <button onClick={() => router.push("/payment")} disabled={!isChecked} className={`${isChecked ? "bg-primaryGreen hover:bg-darkGreen duration-300 hover:text-white" : "bg-green-300 text-gray-600"} mt-4 font-medium disabled:cursor-not-allowed w-full py-3 rounded-3xl`}>Next Step</button>
                </section>
            </div>
        </main>
    );
}

export default Exchange;