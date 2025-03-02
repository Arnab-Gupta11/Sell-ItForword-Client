import SearchDropdown from "./SearchDropdown";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-light-secondary-bg to-light-primary-bg  dark:from-dark-secondary-bg dark:to-dark-primary-bg">
      <div className="max-w-screen-md mx-auto py-20">
        <h1 className="text-center text-6xl font-bold text-light-primary-txt dark:text-dark-primary-txt">
          Discover, Collect And Sell Extraordinary NFTs
        </h1>
        <h5 className="text-center text-lg font-medium text-light-secondary-txt dark:text-dark-secondary-txt mt-5">
          Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens.
        </h5>
        <SearchDropdown />
      </div>
    </div>
  );
};

export default Banner;
