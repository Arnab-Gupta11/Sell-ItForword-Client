import { FaSearch, FaClipboardList, FaComments, FaCreditCard, FaCloudUploadAlt, FaReply, FaHandshake, FaChartLine } from "react-icons/fa";

const howToBuySteps = [
  {
    icon: <FaSearch className="text-white" />,
    title: "Browse Listings",
    description: "Explore various used items and find what you need.",
  },
  {
    icon: <FaClipboardList className="text-white" />,
    title: "Track Purchases",
    description: "Keep an eye on your purchase history and deliveries.",
  },
  {
    icon: <FaComments className="text-white" />,
    title: "Chat with Seller",
    description: "Communicate directly with sellers to inquire about the product.",
  },
  {
    icon: <FaCreditCard className="text-white" />,
    title: "Make a Purchase",
    description: "Once satisfied, make a secure payment and complete the transaction.",
  },
];

const howToSellSteps = [
  {
    icon: <FaCloudUploadAlt className="text-white" />,
    title: "Post Your Item",
    description: "Create a listing with descriptions, photos, and price.",
  },
  {
    icon: <FaReply className="text-white" />,
    title: "Respond to Inquiries",
    description: "Answer buyer questions and provide details if needed.",
  },
  {
    icon: <FaHandshake className="text-white" />,
    title: "Close the Sale",
    description: "Once sold, mark your item as sold and finalize the deal.",
  },
  {
    icon: <FaChartLine className="text-white" />,
    title: "Track Sales",
    description: "Monitor sold items and follow up on payments.",
  },
];
const HowitWorks = () => {
  return (
    <div className="pt-14 pb-20">
      <h1 className="text-2xl sm:text-3xl font-semibold ">How It Works: Buy & Sell</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 md:space-x-10 mt-10">
        <div className=" pl-5">
          <h3 className="text-xl font-medium text-light-primary-txt dark:text-dark-primary-txt mb-6 -mx-4">Buying Made Easy</h3>
          <ol className="relative text-gray-500 border-s border-slate-200 dark:border-gray-700 dark:text-gray-400">
            {howToBuySteps.map((step, index) => (
              <li key={index} className="mb-10 ms-6">
                <div className="absolute flex items-center justify-center w-8 h-8 bg-primary-btn-bg rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
                  {step.icon}
                </div>
                <div className="p-3 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
                  <h3 className="font-medium leading-tight text-light-primary-txt dark:text-dark-primary-txt text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-light-secondary-txt dark:text-dark-secondary-txt">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className=" pl-5">
          <h3 className="text-xl font-medium text-light-primary-txt dark:text-dark-primary-txt mb-6 -mx-4">Selling Made Easy</h3>
          <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
            {howToSellSteps.map((step, index) => (
              <li key={index} className="mb-10 ms-6">
                <div className="absolute flex items-center justify-center w-8 h-8 bg-primary-btn-bg rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  {step.icon}
                </div>
                <div className="p-3 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
                  <h3 className="font-medium leading-tight text-light-primary-txt dark:text-dark-primary-txt text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-light-secondary-txt dark:text-dark-secondary-txt">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
