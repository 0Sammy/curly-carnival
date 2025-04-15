//Components
import Header from "@/Components/Exchange/Header";
import CryptoWidget from "@/Components/HomePage/PriceMarquee";
import Exchange from "@/Components/Exchange/Exchange";

const page = () => {
    return (
        <main>
            <Header />
            <div className="mt-[4.65rem]">
                <CryptoWidget />
            </div>
            <Exchange />
        </main>
    );
}

export default page;