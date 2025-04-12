import Image from "next/image";
import Link from "next/link";

//Images
import bodyImage from "../../public/sol.png";

//Icons
import { Solana, BinanceCoin, Facebook } from "iconsax-react";

const SolPrices = () => {
    return (
        <div className="relative h-[30rem]">
            <Image src={bodyImage} alt="Sol Image" className="w-full h-full" />
            <div className="top-0 absolute place-content-center grid bg-black/80 w-full h-[4.2rem] text-white">
                <h1 className="font-semibold text-base sm:text-lg">LADA/SOL <span className="mx-1">&gt;&gt;</span> MNEB/BNB</h1>
                <div className="flex items-center gap-x-3 mt-0.5 font-medium text-gray-200 text-base sm:text-lg">
                    <h1 className="flex items-center gap-x-1"><Solana color="#DC1FFF" /> Solana</h1>
                    <span>&gt;</span>
                    <h1 className="flex items-center gap-x-1"><BinanceCoin color="#F3BA2F" /> BNB</h1></div>
            </div>
            <div className="bottom-2 left-1/2 absolute grid grid-cols-2 bg-black/80 rounded-xl w-[90%] h-12 font-semibold text-white text-base sm:text-lg -translate-x-1/2">
                <Link href="" className="flex justify-center items-center gap-x-1 border-r border-black">
                    <Facebook color="#1877F2" variant="Bold" /> Facebook
                </Link>
                <Link href="" className="flex justify-center items-center gap-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 240 240" fill="none">
                        <circle cx="120" cy="120" r="120" fill="#0088cc" />
                        <path d="M179.112 73.7376L160.478 166.754C158.861 174.522 154.494 176.24 147.95 172.37L108.862 143.792L89.5565 162.179C87.7852 163.902 86.3108 165.378 83.2091 165.378L86.1538 124.319L154.401 82.2487C157.393 80.4083 154.001 79.0328 150.553 80.8729L71.3579 121.002L31.6448 108.3C24.0222 105.927 24.0222 100.217 32.6249 96.3406L172.026 40.8359C178.272 38.2655 183.842 42.2293 179.112 73.7376Z" fill="white" />
                    </svg>
                    Telegram
                </Link>
            </div>
        </div>
    );
}

export default SolPrices;