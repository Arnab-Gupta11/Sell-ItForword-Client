import { Menu } from "lucide-react";
import NavItem from "./NavItem";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TNavMenuItem } from ".";

const NavSidebar = ({ menuItems }: { menuItems: TNavMenuItem }) => {
  const pathname = usePathname();
  return (
    <div className="ml-5 lg:ml-0">
      <Sheet>
        <SheetTrigger className="border-none bg-primary-bg-light shadow-md dark:shadow-slate-900 p-2 rounded-lg block lg:hidden">
          <Menu size={18} />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="border-none bg-[#F4F8FB]  dark:bg-dark-bg-primary shadow-md shadow-secondary-bg-light dark:shadow-secondary-bg-dark outline-none"
        >
          <SheetHeader>
            <SheetTitle className="flex items-start pl-6 mb-6">
              <span className="text-light-primary-txt dark:text-dark-primary-txt text-4xl font-bold">
                A<span className="text-primary">G</span>
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
