import { Menu } from "lucide-react";
import NavItem from "./NavItem";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo/Logo1.png";

import CollapseMenu from "./CollapseMenu";
import { ICategory } from "@/types/category.types";

const menuItems = [
  {
    label: "Home",
    path: "/",
    show: true,
  },
  {
    label: "All Listings",
    path: "/listings",
    show: true,
  },
  {
    label: "Categories",
    path: "/categories",
    show: true,
    isCollapsible: true,
  },
  {
    label: "Blogs",
    path: "/blogs",
    show: true,
  },
  {
    label: "About",
    path: "/about-us",
    show: true,
  },
  {
    label: "Contact",
    path: "/contact",
    show: true,
  },
  {
    label: "FAQ",
    path: "/faq",
    show: true,
  },
];
const NavSidebar = ({ categories }: { categories: ICategory[] }) => {
  const pathname = usePathname();
  return (
    <div className="ml-5 lg:ml-0">
      <Sheet>
        <SheetTrigger className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a] p-2 rounded-lg block lg:hidden">
          <Menu size={18} />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-light-secondary-bg dark:bg-dark-secondary-bg w-[90%]">
          <SheetHeader>
            <SheetTitle className="flex items-start pl-4 my-6">
              <span className="text-light-primary-txt dark:text-dark-primary-txt text-4xl font-bold">
                <Image src={logo} alt={"Logo"} width={150} className={"h-auto"} />
              </span>
            </SheetTitle>
            <div className="flex flex-col gap-4 items-start justify-start pl-4 xsm:pr-6">
              {menuItems.map((menuItem, idx) =>
                menuItem.show ? (
                  menuItem.isCollapsible ? (
                    <CollapseMenu key={idx} label={menuItem.label} path={menuItem.path} categories={categories} />
                  ) : (
                    <Link
                      key={idx}
                      href={menuItem.path}
                      className={`${
                        pathname === menuItem.path
                          ? "text-primary font-medium"
                          : "text-light-primary-txt dark:text-dark-primary-txt hover:text-primary duration-500 ease-in-out"
                      }`}
                    >
                      <NavItem label={menuItem.label} active={true} />
                    </Link>
                  )
                ) : null
              )}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavSidebar;
