"use client";
import { HiOutlineLogout } from "react-icons/hi";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BiHome } from "react-icons/bi";
import { FaBlog, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { ThemeToggler } from "@/components/shared/ThemeToggler/ThemeToggler";
import DashbooardSidebarItem from "./DashboardSidebarItem";
import useUser from "@/hooks/useUser";
import { logout } from "@/services/auth";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const menuItems = [
    {
      label: "Manage Listings",
      path: "/dashboard/user/listings",
      show: user?.role === "user",
      Icon: FaBlog, // 📝 Blog Icon
    },
    {
      label: "Track Purchases",
      path: "/dashboard/user/purchase-history",
      show: user?.role === "user",
      Icon: FaProjectDiagram, // 📁 Project Icon
    },
    {
      label: "Track Sales",
      path: "/dashboard/user/sales-history",
      show: user?.role === "user",
      Icon: FaEnvelope, // ✉️ Message Icon
    },
    {
      label: "Manage Profile",
      path: "/dashboard/user/profile",
      show: user?.role === "user",
      Icon: FaEnvelope, // ✉️ Message Icon
    },
    {
      label: "Wishlist",
      path: "/dashboard/user/wishlist",
      show: user?.role === "user",
      Icon: FaEnvelope, // ✉️ Message Icon
    },
    {
      label: "Manage User",
      path: "/dashboard/admin/user-management",
      show: user?.role === "admin",
      Icon: FaEnvelope, // ✉️ Message Icon
    },
    {
      label: "Manage Listings",
      path: "/dashboard/admin/listings",
      show: user?.role === "admin",
      Icon: FaEnvelope, // ✉️ Message Icon
    },
  ];

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    router.push("/");
    // if (protectedRoutes.some((route) => pathname.match(route))) {
    //   router.push("/");
    // }
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-light-secondary-bg dark:bg-dark-secondary-bg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0 lg:fixed`}
      >
        <div className="flex items-center justify-between p-4 ">
          <div className="ml-5">
            <span className="text-light-primary-txt dark:text-dark-primary-txt text-4xl font-bold">
              A<span className="text-primary">G</span>
            </span>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-1.5">
          {menuItems.map((menuItem, idx) => {
            return menuItem.show ? <DashbooardSidebarItem key={idx} menuItem={menuItem} /> : null;
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 lg:ml-64">
        {/* Navbar */}
        <header className="sticky top-0 z-40 flex items-center justify-between xsm:justify-between px-6 py-4 bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-md">
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex items-center xsm:pl-5 gap-3 xsm:gap-5">
            <Link href={"/"}>
              <BiHome className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a] w-9 h-9 p-2 rounded-md" />
            </Link>
            <ThemeToggler />
            <div className="mt-1">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none hover:scale-105 active:scale-95 duration-700">
                  <Avatar className=" border-2 border-[#e9ebec] dark:border-[#142e3a]">
                    <AvatarImage src={user ? user?.profileImg : "https://github.com/shadcn.png"} alt="@shadcn" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="bottom"
                  className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-none shadow-md shadow-[#e9ebec] dark:shadow-[#142e3a] outline-none "
                >
                  <DropdownMenuLabel>{user?.fullName}</DropdownMenuLabel>

                  <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <span
              onClick={handleLogOut}
              className="cursor-pointer bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]  p-1 rounded-md "
            >
              <HiOutlineLogout className=" text-red-600 text-2xl" />
            </span>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-light-primary-bg dark:bg-dark-primary-bg rounded-lg">
          <div className="p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-md dark:shadow-slate-900 min-h-screen rounded-lg">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
