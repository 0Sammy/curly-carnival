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
      <div className="top-0 z-[2] fixed mt-[3.5rem] w-full">
        <CryptoWidget />
      </div>
      <div className="mt-[10rem]">
        <SolPrices />
      </div>
      <Chart />
      <Form />
      <StarRating />
      <Footer />
    </main>
  );
}

export default page;