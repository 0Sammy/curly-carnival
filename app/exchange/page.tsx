//Components
import Header from "@/Components/Exchange/Header";
import CryptoWidget from "@/Components/HomePage/PriceMarquee";
import Exchange from "@/Components/Exchange/Exchange";

const page = () => {
    return (
        <main>
            <Header />
            <div className="top-0 fixed mt-[3.5rem] w-full">
                <CryptoWidget />
            </div>
            <div className="mt-[10rem]">
                <Exchange />
            </div>
        </main>
    );
}

export default page;