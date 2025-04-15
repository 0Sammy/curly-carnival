import Image from "next/image";

//Images
import logo from "../../public/logo.png";

//Components
import ConnectWallet from "./ConnectButton";

const Header = () => {
    return (
        <main className="top-0 left-0 z-[3] fixed flex justify-between items-center bg-white px-4 sm:px-6 py-4 border-primaryGreen border-b w-full text-deepBlack">
            <div className="flex items-center gap-x-2">
                <Image src={logo} alt="logo" className="w-10" />
                <h1 className="font-medium text-lg md:text-xl xl:text-2xl"><span className="font-semibold">MINEREUM</span> BSC</h1>
            </div>
            <ConnectWallet />
        </main>
    );
}

export default Header;