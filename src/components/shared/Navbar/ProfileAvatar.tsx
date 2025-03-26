"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUser from "@/hooks/useUser";
import { logout } from "@/services/auth";
import { Heart, LayoutDashboard, LogIn, LogOut, UserPlus } from "lucide-react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
const ProfileAvatar = () => {
  const { user, setIsLoading } = useUser();
  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    // if (protectedRoutes.some((route) => pathname.match(route))) {
    //   router.push("/");
    // }
  };

  return (
    <div className="font-Play font-medium">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {user ? (
            <Avatar className=" cursor-pointer ml-5 flex items-center justify-center">
              <AvatarImage src={user ? user?.profileImg : "https://github.com/shadcn.png"} alt="@shadcn" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          ) : (
            <span>
              <CgProfile className="text-3xl text-primary-text-light hover:text-primary-bg transition hover:scale-105 ml-5 cursor-pointer" />
            </span>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
          <DropdownMenuLabel>{user ? <span>{user?.fullName}</span> : "My Account"}</DropdownMenuLabel>
          {/* <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-700" /> */}
          <DropdownMenuGroup>
            {!user && (
              <>
                <Link href={"/login"}>
                  <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </DropdownMenuItem>
                </Link>

                <Link href={"/register"}>
                  <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Register
                  </DropdownMenuItem>
                </Link>
              </>
            )}
            {user && (
              <Link href={user?.role === "admin" ? "/dashboard/admin/user-management" : "/dashboard/user/listings"}>
                <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuGroup>
          {user && (
            <>
              <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-700" />
              <DropdownMenuItem className="cursor-pointer flex items-center hover:text-red-500" onClick={handleLogOut}>
                <LogOut className="w-4 h-4 mr-2 text-red-500" />
                Log out
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileAvatar;
