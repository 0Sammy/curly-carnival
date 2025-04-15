//Components
import Header from "@/Components/HomePage/Header";
import CryptoWidget from "@/Components/HomePage/PriceMarquee";
import SolPrices from "@/Components/HomePage/SolPrices";
import Chart from "@/Components/HomePage/Chart";
import Form from "@/Components/HomePage/Form";
import StarRating from "@/Components/HomePage/StarRating";
import Footer from "@/Components/HomePage/Footer";


const page = () => {
  return (
    <main>
      <Header />
      <div className="mt-[4.65rem]">
        <CryptoWidget />
      </div>
      <SolPrices />
      <Chart />
      <Form />
      <StarRating />
      <Footer />
    </main>
  );
}

export default page;