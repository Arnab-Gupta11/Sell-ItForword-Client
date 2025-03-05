import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import useUser from "@/hooks/useUser";
import { logout } from "@/services/auth";
import { LogOut } from "lucide-react";

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
    <div className="ml-5">
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
          <DropdownMenuItem>
            <Button
              onClick={handleLogOut}
              variant={"outline"}
              className="w-full border-primary-text text-primary-bg flex items-center gap-2 text-red-500 hover:text-red-600 hover:border-red-600"
            >
              <LogOut size={8} />
              <span className="">Logout</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileAvatar;
