"use client";
import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import { updateWishList } from "@/services/wishlist";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const WishListButton = ({ isExist, listingId }: { isExist: boolean; listingId: string }) => {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const handleUpdateWishList = async () => {
    try {
      if (!user) {
        router.push(`/login?redirectPath=${pathname}`);
      }
      setLoading(true);
      const res = await updateWishList(listingId);
      if (res?.success === true) {
        if (!isExist) {
          toast.success("Item added to your wishlist");
        } else {
          toast.success("Item removed from your wishlist");
        }
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleUpdateWishList}
        disabled={loading || user?.role === "admin"}
        className="py-2 rounded-lg group bg-transparent hover:bg-transparent border-2 border-[#c9cbcc] dark:border-[#142e3a] shadow-sm shadow-[#c2c3c4] dark:shadow-[#142e3a] hover:scale-105 active:scale-95 transition-all"
      >
        {isExist ? (
          <FaHeart size={234} className="text-red-500 font-bold text-2xl" />
        ) : (
          <FaRegHeart size={234} className="text-light-primary-txt dark:text-dark-primary-txt font-bold text-2xl group-hover:text-red-500" />
        )}
      </Button>
    </div>
  );
};

export default WishListButton;
