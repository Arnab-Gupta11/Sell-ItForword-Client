import { HiOutlineHand } from "react-icons/hi";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const services = [
  {
    icon: <HiOutlineHand className="text-green-500 text-4xl mb-4 text-center" />,
    title: "Direct Connection",
    description: "Connect buyers and sellers easily.",
  },
  {
    icon: <HiOutlineCurrencyBangladeshi className="text-blue-500 text-4xl mb-4" />,
    title: "Best Deals",
    description: "Buy & sell at fair prices in BDT.",
  },
  {
    icon: <HiOutlineMapPin className="text-orange-500 text-4xl mb-4" />,
    title: "Local & Remote Deals",
    description: "Connect with buyers near you.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="text-purple-500 text-4xl mb-4" />,
    title: "Direct Communication",
    description: "Chat securely with sellers & buyers.",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="pt-14 pb-20">
      <h1 className="text-2xl sm:text-3xl font-semibold ">Why We Offer?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-5 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a] text-center"
          >
            <div className="flex items-center justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-light-primary-txt dark:text-dark-primary-txt mb-2">{service.title}</h3>
            <p className="text-sm text-light-secondary-txt dark:text-dark-secondary-txt">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
