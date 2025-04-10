import Image from "next/image";

//Images
import bodyImage from "../public/sol.png";

const SolPrices = () => {
    return (
        <div className="">
            <Image src={bodyImage} alt="Sol Image" className="w-full h-[30rem]" />
        </div>
    );
}

export default SolPrices;