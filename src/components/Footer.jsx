import footerLogo from "/footerLogo.png";

const listA = ["Investors", "Features", "Book a demo", "Security"];
const listB = ["Credit Cards", "Gift Cards", "Savings Accounts", "NFT"];
const listC = ["Free rewards", "Documentation", "Affiliate program"];
const listD = ["Changelog", "License", "Site Maps", "News"];

const linkList = (item, list) => (
  <div className="space-y-5">
    <h3 className="font-bold text-white text-sm">{item}</h3>
    <ul className="list-none text-sm">
      {list.map((listItem, i) => (
        <li key={i} className="mb-1">
          <a href={listItem} className="text-secondary text-sm hover:text-sky-400/75 transition duration-200">
            {listItem}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="md:mt-32 mt-24 bg-[#292834]/25 p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-2.5 md:px-10 lg:px-20 xl:px-24 pt-10 pb-14 w-full max-w-[1440px] mx-auto gap-x-2.5 gap-y-5 lg:gap-8 py-12">
        <div className="col-span-2 space-y-2">
          <h2 className="font-bold text-white flex gap-3">
            <img src={footerLogo} alt="" />{" "}
            <span className="text-xl">Wern Finance</span>
          </h2>
          <p className="text-secondary text-sm max-w-[287px]">
            Discover the power of our secure and rewarding credit cards
          </p>
        </div>
        {linkList("About us", listA)}
        {linkList("Products", listB)}
        {linkList("useful Links", listC)}
        {linkList("Social", listD)}
      </div>
    </footer>
  );
};

export default Footer;
