"use client";
import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import { buyListing } from "@/services/transaction";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineShoppingBag } from "react-icons/md";
interface IListingDetails {
  address: string;
  category: string;
  city: string;
  condition: string;
  createdAt: string;
  description: string;
  image: string;
  phone: string;
  price: number;
  status: string;
  title: string;
  updatedAt: string;
  userId: TRefUser;
  __v: number;
  _id: string;
}

type TRefUser = {
  createdAt: string;
  email: string;
  fullName: string;
  image: string;
  isBlocked: boolean;
  role: string;
  updatedAt: string;
  __v: number;
  _id: string;
};
const BuyListings = ({ listingsDetails }: { listingsDetails: IListingDetails }) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log(user);
  const handleBuyNow = async () => {
    try {
      setLoading(true);
      const res = await buyListing({ listingId: listingsDetails?._id });
      if (res?.success) {
        if (res?.data?.url) {
          setTimeout(() => {
            router.push(res.data["url"]);
          }, 500);
        }
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        className="flex w-full items-center justify-center gap-3 rounded-lg select-none"
        onClick={handleBuyNow}
        disabled={loading}
      >
        <MdOutlineShoppingBag />
        <span>{loading ? "Processing..." : "Buy"}</span>
      </Button>
    </div>
  );
};

export default BuyListings;
