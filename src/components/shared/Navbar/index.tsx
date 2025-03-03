"use client";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";

// import NavSidebar from "./NavSidebar";
import Link from "next/link";

import { usePathname } from "next/navigation";
import NavSidebar from "./NavSidebar";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";

export type TUserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};
export type TNavMenuItem = {
  label: string;
  path: string;
  show: boolean;
}[];
const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
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
      label: "Dashboard",
      path: "/dashboard/user/listings",
      show: true,
      // path: `${user?.role === "admin" ? "/dashboard/manage-products" : "/dashboard/view-orders"}`,
      // show: user?.role === "user" || user?.role === "admin",
    },
    {
      label: "Contact",
      path: "/contact",
      show: true,
    },
    // {
    //   label: "Dashboard",
    //   path: "/dashboard/blogs",
    //   show: session?.user ? true : false,
    // },
  ];
  const handleChangeBackgroundOnScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleChangeBackgroundOnScroll);
  }, []);

  return (
    <div
      className={`${
        scrolled ? "backdrop-blur-md shadow-md dark:shadow-slate-800" : "bg-none border-b border-slate-300 dark:border-slate-800"
      } transition-colors duration-500 sticky dark:bg-dark-secondary-bg bg-light-secondary-bg top-0 w-full h-20 z-20`}
    >
      <div className="max-w-screen-xl mx-5 px-3 xs:px-5 md:px-10 xl:px-0 xl:mx-auto flex justify-between items-center  my-auto h-full">
        <div>
          <div className="hidden xs:flex">
            <h1 className="text-light-primary-txt dark:text-dark-primary-txt text-4xl font-bold">
              A<span className="text-primary">G</span>
            </h1>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="hidden lg:flex gap-6 items-center font-medium ">
            {menuItems.map((menuItem, idx) =>
              menuItem.show ? (
                <Link
                  key={idx}
                  href={menuItem.path}
                  className={`font-medium ${
                    pathname === menuItem.path
                      ? "text-primary text-lg"
                      : "text-light-primary-txt dark:text-dark-primary-txt hover:text-primary duration-500 ease-in-out text-base"
                  }`}
                >
                  <NavItem label={menuItem.label} active={true} />
                </Link>
              ) : null
            )}
          </div>

          <div className="flex items-center">
            <ThemeToggler />
            <NavSidebar menuItems={menuItems} />
            {/* {session?.user ? (
              <Button onClick={() => signOut()} className="ml-6">
                Logout
              </Button>
            ) : (
              <Button className="ml-6">
                <Link href={"/login"}>Login</Link>
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
