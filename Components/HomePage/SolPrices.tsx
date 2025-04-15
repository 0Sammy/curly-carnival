import Image from "next/image";
import Link from "next/link";

//Images
import bodyImage from "../../public/sol.png";

//Icons
import { BinanceCoin, Facebook } from "iconsax-react";

const SolPrices = () => {
    return (
        <div className="relative h-[18rem]">
            <Image src={bodyImage} alt="Sol Image" className="w-full h-full" />
            <div className="top-0 absolute place-content-center grid bg-primaryGreen mt-12 w-full h-[4.2rem] text-white">
                <h1 className="font-semibold text-base sm:text-lg">MNEB/BNB</h1>
                <div className="flex items-center gap-x-3 mt-0.5 font-medium text-gray-200 text-base sm:text-lg">
                    <h1 className="flex items-center gap-x-1"><BinanceCoin color="#F3BA2F" /> BNB</h1></div>
            </div>
            <div className="bottom-2 left-1/2 absolute grid grid-cols-2 bg-primaryGreen rounded-xl w-[90%] h-10 font-semibold text-white text-base sm:text-lg -translate-x-1/2">
                <Link href="https://www.facebook.com/profile.php?id=61561124896805" className="flex justify-center items-center gap-x-1 border-white border-r">
                    <Facebook color="#FFF" variant="Bold" /> Facebook
                </Link>
                <Link href="https://t.me/MinereumAirdropOfficial" className="flex justify-center items-center gap-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256"
                       style={{fill: "#FFFFFF"}}>
                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(4,4)"><path d="M32,10c12.15,0 22,9.85 22,22c0,12.15 -9.85,22 -22,22c-12.15,0 -22,-9.85 -22,-22c0,-12.15 9.85,-22 22,-22zM39.589,40.968c0.404,-1.241 2.301,-13.615 2.534,-16.054c0.071,-0.738 -0.163,-1.229 -0.619,-1.449c-0.553,-0.265 -1.371,-0.133 -2.322,0.21c-1.303,0.47 -17.958,7.541 -18.92,7.951c-0.912,0.388 -1.775,0.81 -1.775,1.423c0,0.431 0.256,0.673 0.96,0.924c0.732,0.261 2.577,0.82 3.668,1.121c1.05,0.29 2.243,0.038 2.913,-0.378c0.709,-0.441 8.901,-5.921 9.488,-6.402c0.587,-0.48 1.056,0.135 0.576,0.616c-0.48,0.48 -6.102,5.937 -6.844,6.693c-0.901,0.917 -0.262,1.868 0.343,2.249c0.689,0.435 5.649,3.761 6.396,4.295c0.747,0.534 1.504,0.776 2.198,0.776c0.694,-0.001 1.059,-0.915 1.404,-1.975z"></path></g></g>
                    </svg>
                    Telegram
                </Link>
            </div>
        </div>
    );
}

export default SolPrices;