//Components
import Header from "@/Components/Header";
import CryptoWidget from "@/Components/PriceMarquee";
import SolPrices from "@/Components/SolPrices";


const page = () => {
  return (
    <main>
      <Header />
      <CryptoWidget />
      <SolPrices />
    </main>
  );
}

export default page;