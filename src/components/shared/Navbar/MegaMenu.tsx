import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ICategory } from "@/types/category.types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// const categories = [
//   { name: "Electronics", path: "/categories/electronics" },
//   { name: "Fashion", path: "/categories/fashion" },
//   { name: "Home & Furniture", path: "/categories/home-furniture" },
//   { name: "Books", path: "/categories/books" },
//   { name: "Toys", path: "/categories/toys" },
//   { name: "Automobile", path: "/categories/automobile" },
//   { name: "Sports & Fitness", path: "/categories/sports-fitness" },
//   { name: "Beauty & Personal Care", path: "/categories/beauty-care" },
//   { name: "Beauty & Personal Care", path: "/categories/beauty-care" },
//   { name: "Beauty & Personal Care & Personal Care", path: "/categories/beauty-care" },
// ];
const MegaMenu = ({ label, path, categories }: { label: string; path: string; categories: ICategory[] }) => {
  const pathname = usePathname();
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-light-primary-txt dark:text-dark-primary-txt hover:text-primary duration-500 ease-in-out text-base font-medium">
              <Link
                href={path}
                className={`${
                  pathname === path
                    ? "text-primary font-medium"
                    : "text-light-primary-txt dark:text-dark-primary-txt hover:text-primary duration-500 ease-in-out font-medium"
                }`}
              >
                {label}
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="grid grid-cols-3 gap-5 p-4 lg:min-w-[600px]  rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-md shadow-[#e9ebec] dark:shadow-[#142e3a]">
              {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
              {categories?.map((item: ICategory) => (
                <Link key={item?._id} href={`/listings/categories/${item?._id}`}>
                  <div className="text-sm pb-2.5 text-light-primary-txt dark:text-dark-primary-txt flex items-center gap-3 hover:text-primary">
                    <Image src={item?.icon} height={50} width={50} alt={item?.name} className="w-8 h-8" />
                    <span>{item?.name}</span>
                  </div>
                </Link>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MegaMenu;
