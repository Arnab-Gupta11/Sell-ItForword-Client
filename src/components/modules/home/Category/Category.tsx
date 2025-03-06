import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

import {
  FaLaptop,
  FaCouch,
  FaTshirt,
  FaBook,
  FaBlender,
  FaPuzzlePiece,
  FaBicycle,
  FaCar,
  FaBuilding,
  FaGuitar,
  FaGift,
  FaWrench,
  FaHeart,
  FaPaw,
  FaMotorcycle,
} from "react-icons/fa";

const listingCategoriesWithIcons = [
  { category: "Electronics", Icon: FaLaptop },
  { category: "Furniture", Icon: FaCouch },
  { category: "Clothing & Accessories", Icon: FaTshirt },
  { category: "Books", Icon: FaBook },
  { category: "Home Appliances", Icon: FaBlender },
  { category: "Toys & Games", Icon: FaPuzzlePiece },
  { category: "Sports & Outdoors", Icon: FaBicycle },
  { category: "Vehicles", Icon: FaCar },
  { category: "Real Estate", Icon: FaBuilding },
  { category: "Musical Instruments", Icon: FaGuitar },
  { category: "Collectibles", Icon: FaGift },
  { category: "Tools & Equipment", Icon: FaWrench },
  { category: "Health & Beauty", Icon: FaHeart },
  { category: "Pets & Pet Supplies", Icon: FaPaw },
  { category: "Bikes & Scooters", Icon: FaMotorcycle },
];

const Category = () => {
  return (
    <div className="pt-14 pb-20">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h1 className="text-2xl sm:text-3xl font-semibold ">Browse By Category</h1>
        <Button variant="primary" className="flex items-center gap-2 text-white">
          <span className="font-medium">View All</span>
          <FaAngleRight />
        </Button>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 bs:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 mt-12">
        {listingCategoriesWithIcons.map(({ Icon, category }) => (
          <Link href={`/listings/categories/${category}`} key={category}>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
              <Icon className="text-xl text-primary" />
              <h1 className="text-base font-medium text-light-primary-txt dark:text-dark-primary-txt">{category}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
