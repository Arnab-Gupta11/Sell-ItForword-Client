import ManageCategory from "@/components/modules/dashboard/admin/ManageCategory/ManageCategory";
import DashboardContainer from "@/components/modules/dashboard/Dashboard/DashboardContainer";
import TableSkeletonLoader from "@/components/shared/Loader/TableSkeletonLoader";
import { getAllListingsByAdmin } from "@/services/category";
import React, { Suspense } from "react";
import { FaBoxOpen } from "react-icons/fa";

const ManageCategoryPage = async () => {
  const res = await getAllListingsByAdmin();
  return (
    <Suspense fallback={<TableSkeletonLoader />}>
      <DashboardContainer>
        {res?.data && res?.data?.length > 0 ? (
          <ManageCategory categories={res?.data} meta={res?.meta} />
        ) : (
          <div className="min-h-[calc(100vh-100px)] col-span-3 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-lg sm:text-2xl font-bold text-center max-w-screen-sm mx-auto px-8">
              <FaBoxOpen className="text-9xl opacity-35" />
              <h1 className=" text-light-secondary-txt dark:text-dark-secondary-txt">Your Category List is empty! Start adding new category.</h1>
            </div>
          </div>
        )}
      </DashboardContainer>
    </Suspense>
  );
};

export default ManageCategoryPage;
