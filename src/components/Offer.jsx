import dollar from "/dollar.png";
import ramp from "/ramp.png";
import solution from "/solution.png";

const Offer = () => {
  const offerData = [
    {
      heading: "Cardano Debit-Cards",
      descrption:
        "Cardano, simplified. The debit card that makes crypto spending easy.",
      img_url: dollar,
    },
    {
      heading: "On & Off Ramp",
      descrption: "Fiat meets crypto, effortlessly buy, sell, and manage.",
      img_url: ramp,
    },
    {
      heading: "Solutions for business",
      descrption:
        "Empowering businesses with effortless crypto payments and seamless fiat solutions.",
      img_url: solution,
    },
  ];
  return (
    <section className="sm:mt-32 mt-24 py-6">
      <div>
        <h1 className="font-bold md:text-[40px] text-3xl md:leading-10 leading-6 text-center text-white">
          What do we offer?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 mt-10">
          {offerData.map((item, index) => (
            <div key={index} className="flex justify-center items-start gap-3">
              <div className="bg-[#3D3F54] rounded-[24px] max-w-[66px] max-h-[66px] p-4 ">
                <img src={item.img_url} alt="" className="size-[34px]" />
              </div>
              <div>
                <h2 className="text-white font-bold leading-9 text-2xl">
                  {item.heading}
                </h2>
                <p className="text-secondary text-base leading-6">
                  {item.descrption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
