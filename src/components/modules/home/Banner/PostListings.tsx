"use client";
import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import { FilePlus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PostListings = () => {
  const { user } = useUser();
  const router = useRouter();
  const handlePostListing = () => {
    if (!user) {
      router.push(`/login?redirectPath=/dashboard/user/listings/add-listing`);
      return;
    }
    router.push(`/dashboard/user/listings/add-listing`);
  };
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-7 mt-8 sm:mt-14 ">
      <Button
        onClick={handlePostListing}
        variant={"primary"}
        className={`text-[10px]  sm:text-[16px] text-center sm:px-8 sm:py-6 flex items-center justify-center gap-2 ${
          user?.role === "admin" && "hidden"
        }`}
      >
        <FilePlus className="w-6 h-6" />
        <span>Post Listings</span>
      </Button>
      <Link href={"/listings"}>
        <Button
          className="text-center sm:px-8 sm:py-6 flex items-center justify-center gap-2 border-2 border-[#c8dde9] dark:border-[#132d3a] dark:shadow-[#132d3a] text-[10px]  sm:text-[16px] hover:text-primary hover:bg-light-primary-bg hover:dark:bg-dark-secondary-bg hover:scale-105 active:scale-95"
          variant={"outline"}
        >
          <ShoppingBag className="w-6 h-6" />
          Shop Now
        </Button>
      </Link>
    </div>
  );
};

export default PostListings;
