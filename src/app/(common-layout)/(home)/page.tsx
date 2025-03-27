import Banner from "@/components/modules/home/Banner/Banner";
import Category from "@/components/modules/home/Category/Category";
import LatestBlogs from "@/components/modules/home/LatestBlogs/LatestBlogs";
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
        <LatestBlogs />
      </div>
    </div>
  );
};

export default HomePage;
