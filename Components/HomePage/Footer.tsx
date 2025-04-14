import Link from "next/link";
import Image  from "next/image";

//Images
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import tiktok from "../../public/tiktok.svg";
import telegram from "../../public/telegram.svg";
import info from "../../public/info.png";

//Icons
import { Copyright } from "iconsax-react";

const Footer = () => {
    return (
        <main className="bg-gray-600 p-2 text-white">
            <div className="flex items-center gap-x-1 mt-4">
                <Image src={info} className="size-6" alt="Info Icon" />
                <p className="font-semibold text-sm sm:text-base">About</p>
            </div>
            <p className="mt-4 text-xs sm:text-sm">
                Minereum BSC (MNEB) brings the first Self-mining Smart Contract to the Binance Smart Chain (BSC). <br />
                Launched in June, 2021, it allows users to mine without the need of any mining equipment. Similar to the first version of Minereum (MNE) launched in 2017 on the ETH chain. <br />
                It also includes other features like incorporated DEX capabilities for MNEB, Genesis Addresses and Fee Shares. It also includes the Lucky Draw experiment which brings a new mechanism to generate safe random numbers on the blockchain.
            </p>
            <div className="flex flex-wrap gap-x-5 mt-4">
                <Link target="_blank" href="https://t.me/MinereumAirdropOfficial">
                    <Image className="size-6" src={telegram} alt="Telegram Icon" />
                </Link>
                <Link target="_blank" href="https://www.facebook.com/profile.php?id=61561124896805">
                    <Image className="size-6" src={facebook} alt="Facebook Icon" />
                </Link>
                <Link target="_blank" href="https://www.instagram.com/minereumairdropminting?igsh=YzljYTk10Dg3Zg==">
                    <Image className="size-6" src={instagram} alt="Instagram Icon" />
                </Link>
                <Link target="_blank" href="tiktok.com/@minereum">
                    <Image className="size-6" src={tiktok} alt="Tiktok Icon" />
                </Link>
            </div>
            <div className="flex items-center mt-4">
                <Copyright size={18} />
                <p>2017 Minereum Bsc All right reserved.</p>
            </div>
        </main>
    );
}

export default Footer;