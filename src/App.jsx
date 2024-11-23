import DebitCard from "./components/DebitCard";
import FAQs from "./components/FAQs";
import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavbarArea from "./components/Navbar";
import Offer from "./components/Offer";
import PerfectCard from "./components/PerfectCard";
import Vision from "./components/Vision";

function App() {
  return (
    <>
      <div>
        <NavbarArea />
        <div className="overflow-hidden px-8 sm:px-12 md:px-16 lg:px-20 mx-auto">
          <Hero />
          <Vision />
          <Offer />
          <DebitCard />
          <PerfectCard />
          <Feedbacks />
          <FAQs />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
