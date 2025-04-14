import Image from "next/image";

//Images
import logo from "../../public/logo.png";

//Components
import ConnectWallet from "./ConnectButton";

const Header = () => {
    return (
        <main className="flex justify-between items-center bg-black/80 px-4 sm:px-6 py-4 text-white">
            <div className="flex items-center gap-x-2">
                <Image src={logo} alt="logo" className="w-10" />
                <h1 className="font-medium text-lg md:text-xl xl:text-2xl"><span className="font-semibold">MINEREUM</span> BSC</h1>
            </div>
            <ConnectWallet />
        </main>
    );
}

export default Header;