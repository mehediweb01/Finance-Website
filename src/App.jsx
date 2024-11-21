import Hero from "./components/Hero";
import NavbarArea from "./components/Navbar";
import Vision from "./components/Vision";

function App() {
  return (
    <>
      <div>
        <NavbarArea />
        <div className="overflow-x-hidden px-8 sm:px-12 md:px-16 lg:px-20" >
          <Hero />
          <Vision />
        </div>
      </div>
    </>
  );
}

export default App;
