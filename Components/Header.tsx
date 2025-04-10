import Image from "next/image";

//Images
import logo from "../public/logo.png";

//Icons
import { HambergerMenu } from "iconsax-react";

const Header = () => {
    return (
        <main className="flex justify-between items-center bg-black/80 px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-14 xl:px-12 py-4 text-white">
            <div className="flex items-center gap-x-2">
                <Image src={logo} alt="logo" className="w-10" />
                <h1 className="font-medium text-lg md:text-xl xl:text-2xl"><span className="font-semibold">MINEREUM</span> BSC</h1>
            </div>
            <HambergerMenu className="cursor-pointer" size={28} />
        </main>
    );
}

export default Header;