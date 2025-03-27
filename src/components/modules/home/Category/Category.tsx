import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/services/category";
import { ICategory } from "@/types/category.types";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

// const listingCategoriesWithIcons = [
//   { category: "Electronics", Icon: FaLaptop },
//   { category: "Furniture", Icon: FaCouch },
//   { category: "Clothing & Accessories", Icon: FaTshirt },
//   { category: "Books", Icon: FaBook },
//   { category: "Home Appliances", Icon: FaBlender },
//   { category: "Toys & Games", Icon: FaPuzzlePiece },
//   { category: "Sports & Outdoors", Icon: FaBicycle },
//   { category: "Vehicles", Icon: FaCar },
//   { category: "Pets & Pet Supplies", Icon: FaPaw },
//   { category: "Musical Instruments", Icon: FaGuitar },

//   { category: "Collectibles", Icon: FaGift },
//   { category: "Real Estate", Icon: FaBuilding },
//   { category: "Tools & Equipment", Icon: FaWrench },
//   { category: "Health & Beauty", Icon: FaHeart },

//   { category: "Bikes & Scooters", Icon: FaMotorcycle },
// ];

const Category = async () => {
  const result = await getAllCategories();
  return (
    <div className="pt-14 pb-20">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h1 className="text-2xl sm:text-3xl font-semibold ">Browse By Category</h1>
        <Link href={"/categories"}>
          <Button variant="primary" className="flex items-center gap-2 text-white">
            <span className="font-medium">View All</span>
            <FaAngleRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 bs:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 mt-12">
        {result?.data?.map((item: ICategory) => (
          <Link href={`/listings/categories/${item?._id}`} key={item?._id}>
            <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
              <Image src={item?.icon} alt={item?.name} width={80} height={80} className="w-16 h-16" />
              <h1 className="text-base font-medium text-light-primary-txt dark:text-dark-primary-txt">{item?.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
