import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
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
const MegaMenu = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-light-primary-txt dark:text-dark-primary-txt hover:text-primary duration-500 ease-in-out text-base font-medium">
              Item One
            </NavigationMenuTrigger>
            <NavigationMenuContent className="grid min-w-[400px] gap-3 p-4 md:max-w-[500px] grid-cols-1 md:grid-cols-2 lg:min-w-[400px] overflow-auto">
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
