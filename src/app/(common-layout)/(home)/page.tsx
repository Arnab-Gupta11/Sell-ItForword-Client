import Banner from "@/components/modules/home/Banner/Banner";
import Category from "@/components/modules/home/Category/Category";
import HowitWorks from "@/components/modules/home/HowItWorks";
import LatestBlogs from "@/components/modules/home/LatestBlogs/LatestBlogs";
import LatestListings from "@/components/modules/home/LatestListings/LatestListings";
import WhatWeOffer from "@/components/modules/home/WhyWeOffer/WhatWeOffer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "SellItForword | Home",
};
const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto px-5 xsm:px-5 bs:px-8">
        <Category />
        <HowitWorks />
        <LatestListings />
        <WhatWeOffer />
        <LatestBlogs />
      </div>
    </div>
  );
};

export default HomePage;
