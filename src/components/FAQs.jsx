import { Accordion, AccordionItem } from "@nextui-org/accordion";

const listItem = [
  {
    q: "What credit score do I need to apply for a credit card?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: " How can I apply for a credit card online?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "Are there any annual fees associated with the credit card?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "How long does it take to receive the credit card once approved?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: " How can I check my credit card balance and transactions?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: "  What should I do if my credit card is lost or stolen?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    q: " Is my credit card information secure?",
    a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
];

const FAQs = () => {
  return (
    <section className="md:mt-32 mt-24 space-y-8 ">
      <h2 className="font-bold text-white md:text-4xl text-3xl text-center">
        FAQs
      </h2>
      <Accordion>
        {listItem.map((item, i) => (
          <AccordionItem
            key={i}
            title={item.q}
            className="md:w-4/5 w-full mx-auto border-b-2 border-b-secondary"
          >
            <p className="text-secondary text-sm">{item.a}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQs;
