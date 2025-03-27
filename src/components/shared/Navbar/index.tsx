"use client";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavSidebar from "./NavSidebar";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import ProfileAvatar from "./ProfileAvatar";
import logo from "@/assets/logo/Logo1.png";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import { getAllCategories } from "@/services/category";
import { ICategory } from "@/types/category.types";
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

  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategories();
      setCategories(result?.data || []);
    };
    fetchCategories();
  }, []);
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
      isMegaMenu: true,
    },
    // {
    //   label: "Dashboard",
    //   path: `${user?.role === "admin" ? "/dashboard/admin/user-management" : "/dashboard/user/listings"}`,
    //   show: user?.role === "user" || user?.role === "admin",
    // },
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
              {/* A<span className="text-primary">G</span> */}
              <Image src={logo} alt={"Logo"} width={150} className={"h-auto"} priority />
            </h1>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="hidden lg:flex gap-6 items-center font-medium ">
            {menuItems.map((menuItem, idx) =>
              menuItem.show ? (
                menuItem.isMegaMenu ? (
                  <MegaMenu key={idx} label={menuItem.label} path={menuItem.path} categories={categories} />
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

          <div className="flex items-center">
            <ThemeToggler />
            <ProfileAvatar />
            <NavSidebar categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
