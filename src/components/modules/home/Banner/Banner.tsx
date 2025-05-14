import SearchDropdown from "./SearchDropdown";
import PostListings from "./PostListings";
import Image from "next/image";
import chair from "@/assets/banner/chair.png";
import cycle from "@/assets/banner/cycle.png";
import tv from "@/assets/banner/television.png";
import shirt from "@/assets/banner/shirt.png";
const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-light-secondary-bg to-light-primary-bg  dark:from-dark-secondary-bg dark:to-dark-primary-bg relative">
      <div className="max-w-screen-md mx-auto py-20 px-3 xsm:px-5 bs:px-8">
        <h1 className="text-center text-3xl sm:text-5xl  bs:text-6xl font-bold text-light-primary-txt dark:text-dark-primary-txt">
          Find amazing deals or sell your unused items.
        </h1>
        <h5 className="text-center text-sm sm:text-base bs:text-lg font-medium text-light-secondary-txt dark:text-dark-secondary-txt mt-5">
          Sustainable shopping made simple—buy & sell with ease.
        </h5>
        <SearchDropdown />
        <PostListings />
      </div>
      <div>
        <Image src={shirt} alt="chair" width={80} height={80} className="absolute left-40 top-16 opacity-15 hidden xl:block" />
        <Image
          src={chair}
          alt="chair"
          width={70}
          height={70}
          className="absolute xl:left-80  md:left-20 lg:left-40 bottom-24 opacity-15 hidden md:block -rotate-6"
        />
        <Image src={tv} alt="chair" width={80} height={80} className="absolute right-40  top-16 opacity-15 hidden xl:block" />
        <Image
          src={cycle}
          alt="chair"
          width={90}
          height={90}
          className="absolute xl:right-80 md:right-20 lg:right-40 bottom-24 opacity-15 hidden md:block rotate-12"
        />

        {/* <Image src={chair} alt="chair" width={80} height={80} className="absolute left-48 bottom-10 opacity-15" /> */}
      </div>
    </div>
  );
};

export default Banner;
