//Components
import Header from "@/Components/HomePage/Header";
import CryptoWidget from "@/Components/HomePage/PriceMarquee";
import SolPrices from "@/Components/HomePage/SolPrices";
import Chart from "@/Components/HomePage/Chart";
import Form from "@/Components/HomePage/Form";


const page = () => {
  return (
    <main>
      <Header />
      <CryptoWidget />
      <SolPrices />
      <Chart />
      <Form />
    </main>
  );
}

export default page;