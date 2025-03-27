import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
const categories = [
  { name: "Electronics", path: "/categories/electronics" },
  { name: "Fashion", path: "/categories/fashion" },
  { name: "Home & Furniture", path: "/categories/home-furniture" },
  { name: "Books", path: "/categories/books" },
  { name: "Toys", path: "/categories/toys" },
  { name: "Automobile", path: "/categories/automobile" },
  { name: "Sports & Fitness", path: "/categories/sports-fitness" },
  { name: "Beauty & Personal Care", path: "/categories/beauty-care" },
  { name: "Beauty & Personal Care", path: "/categories/beauty-care" },
  { name: "Beauty & Personal Care & Personal Care", path: "/categories/beauty-care" },
];
const MegaMenu = ({ label, path }: { label: string; path: string }) => {
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
              {categories.map((category, idx) => (
                <Link key={idx} href={category.path} className="text-gray-700 dark:text-gray-300 hover:text-primary">
                  {category.name}
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
