import { Button, Skeleton } from "@nextui-org/react";
import heroImg from "/heroCard.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";

const Hero = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     setTimeout(() => {
       setLoading(false);
     }, 3000);
   }, []);
  
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between sm:items-start items-center py-8 md:mt-32 mt-5 gap-5">
      <div>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white ">
          Spend your Cardano anywhere, anytime.
        </h2>
        <p className="text-[12px] sm:text-base text-secondary md:py-5 py-4 max-w-md">
          Our user-friendly platform enables businesses and individuals to
          seamlessly convert and spend their crypto for everyday purchases.
        </p>
        <Button
          variant="solid"
          color="primary"
          size="md"
          radius="full"
          className="font-semibold leading-6 text-base tracking-[0.8px]"
        >
          Get Started
          <span>
            <IoIosArrowRoundForward className="size-7" />
          </span>
        </Button>
      </div>
      {loading ? (
        <Skeleton className="bg-[#3D3F54] rounded-lg -mr-[130px]">
          <div className="w-[600px] h-[400px]"></div>
        </Skeleton>
      ) : (
        <img src={heroImg} alt="" className="w-1/2 md:-mr-[120px]" />
      )}
    </section>
  );
};

export default Hero;
