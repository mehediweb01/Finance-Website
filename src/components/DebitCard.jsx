import DebitCardImg from "/debitCard.png";
import { Button } from "@nextui-org/react";
import { IoIosArrowRoundForward } from "react-icons/io";

const DebitCard = () => {
  return (
    <section className="md:mt-32 sm:mt-24 mt-16 py-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
      <div>
        <h1 className="text-white font-bold md:text-[40px] text-3xl md:leading-[57px] leading-9">
          Wern Debit Card
        </h1>
        <p className="py-3 text-secondary text-base leading-6 max-w-md">
          More than just a card, it&apos;s a bridge to a new financial
          experience. Embrace the simplicity and security of spending your
          Cardano with the Wern Card.
        </p>
        <Button
          variant="solid"
          radius="full"
          color="primary"
          className="font-bold text-base leading-6"
        >
          Create New Card
          <span>
            <IoIosArrowRoundForward className="size-6" />
          </span>
        </Button>
        <p className="text-primary text-base leading-6 font-bold mt-2 ms-5 ">
          Will be available soon
        </p>
      </div>
      <img src={DebitCardImg} alt="" className="sm:w-1/2 w-full" />
    </section>
  );
};

export default DebitCard;
