import Banner from "@/components/modules/home/Banner/Banner";
import Category from "@/components/modules/home/Category/Category";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto px-3 xsm:px-5 bs:px-8">
        <Category />
      </div>
    </div>
  );
};

export default HomePage;
