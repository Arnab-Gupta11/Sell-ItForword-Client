import ManageUser from "@/components/modules/dashboard/admin/ManageUser/ManageUser";
import TableSkeletonLoader from "@/components/shared/Loader/TableSkeletonLoader";
import { getAllUsers } from "@/services/user";
import { Suspense } from "react";
import { FaBoxOpen } from "react-icons/fa";

const ManageUserPage = async () => {
  const res = await getAllUsers();
  return (
    <Suspense fallback={<TableSkeletonLoader />}>
      <div>
        {res?.data && res?.data?.length > 0 ? (
          <ManageUser result={res?.data} meta={res?.meta} />
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
      </div>
    </Suspense>
  );
};

export default ManageUserPage;
