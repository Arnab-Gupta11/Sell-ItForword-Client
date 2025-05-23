import DashboardContainer from "@/components/modules/dashboard/Dashboard/DashboardContainer";
import ManageWishlist from "@/components/modules/dashboard/user/ManageWishlist/ManageWishlist";
import { getCurrentUser } from "@/services/auth";
import { getWishList } from "@/services/wishlist";
import { FaBoxOpen } from "react-icons/fa";

const WishlistPage = async () => {
  const user = await getCurrentUser();
  const res = await getWishList(user.userId);
  return (
    <DashboardContainer>
      {res?.data && res?.data?.listings?.length > 0 ? (
        <ManageWishlist result={res?.data?.listings} />
      ) : (
        <div className="min-h-[calc(100vh-100px)] col-span-3 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-lg sm:text-2xl font-bold text-center max-w-screen-sm mx-auto px-8">
            <FaBoxOpen className="text-9xl opacity-35" />
            <h1 className=" text-light-secondary-txt dark:text-dark-secondary-txt">
              Your wishlist is empty! 💔 Start adding your favorite listings and keep track of what you love.
            </h1>
          </div>
        </div>
      )}
    </DashboardContainer>
  );
};

export default WishlistPage;
