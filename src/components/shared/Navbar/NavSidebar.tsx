import { Menu } from "lucide-react";
import NavItem from "./NavItem";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TNavMenuItem } from ".";
import Image from "next/image";
import logo from "@/assets/logo/Logo1.png";
const NavSidebar = ({ menuItems }: { menuItems: TNavMenuItem }) => {
  const pathname = usePathname();
  return (
    <div className="ml-5 lg:ml-0">
      <Sheet>
        <SheetTrigger className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a] p-2 rounded-lg block lg:hidden">
          <Menu size={18} />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-light-secondary-bg dark:bg-dark-secondary-bg">
          <SheetHeader>
            <SheetTitle className="flex items-start pl-6 mb-6">
              <span className="text-light-primary-txt dark:text-dark-primary-txt text-4xl font-bold">
                <Image src={logo} alt={"Logo"} width={150} className={"h-auto"} />
              </span>
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-4 items-start justify-start pl-7">
              {menuItems.map((menuItem, idx) =>
                menuItem.show ? (
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
                ) : null
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavSidebar;
