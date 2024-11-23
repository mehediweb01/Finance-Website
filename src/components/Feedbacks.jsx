import person1 from "/person1.png";
import person2 from "/person2.png";
import person3 from "/person3.png";
import quote from "/quote.png";

const reviews = [
  {
    useImage: person1,
    description:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    name: "Hadid Khan",
    role: "UI/UX Designer",
  },
  {
    useImage: person2,
    description:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    name: "Wade Warren",
    role: "Web Designer",
  },
  {
    useImage: person3,
    description:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    name: "Jenny Wilson",
    role: "Trust Administrator",
  },
];
const Feedbacks = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:mt-32 mt-24">
      {reviews.map((item, i) => (
        <div key={i} className="bg-[#27322F]/25 px-8 py-14 rounded-xl space-y-6">
          <div className="w-14 h-14 rounded-full bg-[#3D3F54] flex justify-center items-center">
            <img src={quote} alt="" />
          </div>
          <p className="text-white text-sm">{item.description}</p>
          <div className="flex items-center gap-2">
            <div>
              <img src={item.useImage} alt="" />
            </div>
            <div>
              <h5 className="font-bold text-white">{item.name}</h5>
              <p className="text-secondary text-sm">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Feedbacks
