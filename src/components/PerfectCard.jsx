import perfectCardImg from "/perfectCard.png";
import { Button } from "@nextui-org/react";

const PerfectCard = () => {
  return (
    <section className="md:mt-32 sm:mt-24 mt-16 py-8 flex flex-col md:flex-row justify-between items-center gap-3">
      <img src={perfectCardImg} alt="" className="sm:w-1/2 w-full" />

      <div>
        <h1 className="text-white font-bold md:text-[38px] text-3xl md:leading-[57px] leading-9">
          Find the Perfect Card for You
        </h1>
        <p className="py-3 text-secondary text-base leading-6 max-w-lg">
          Unlocking the Power of Crypto, Both Virtually and Physically Manage
          your crypto effortlessly and spend it seamlessly with Wern. Our
          virtual card allows for instant and secure online transactions, while
          the physical Wern Card empowers you to convert and spend your crypto
          at millions of merchants worldwide. Experience the flexibility and
          convenience of both options, all within the secure and user-friendly
          Wern ecosystem.
        </p>
        <Button
          variant="solid"
          radius="full"
          color="primary"
          className="font-bold text-base leading-6"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default PerfectCard;
