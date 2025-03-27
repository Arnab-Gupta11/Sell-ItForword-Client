import TestNav from "@/components/shared/Navbar/TestNav";
import SearchDropdown from "./SearchDropdown";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-light-secondary-bg to-light-primary-bg  dark:from-dark-secondary-bg dark:to-dark-primary-bg">
      <div className="max-w-screen-md mx-auto py-20 px-3 xsm:px-5 bs:px-8">
        <h1 className="text-center text-3xl sm:text-5xl  bs:text-6xl font-bold text-light-primary-txt dark:text-dark-primary-txt">
          Find amazing deals or sell your unused items.
        </h1>
        <h5 className="text-center text-sm sm:text-base bs:text-lg font-medium text-light-secondary-txt dark:text-dark-secondary-txt mt-5">
          Sustainable shopping made simple—buy & sell with ease.
        </h5>
        <SearchDropdown />
        <TestNav />
      </div>
    </div>
  );
};

export default Banner;
