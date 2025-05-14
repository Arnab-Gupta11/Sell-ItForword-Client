import DashboardContainer from "@/components/modules/dashboard/Dashboard/DashboardContainer";
import ManageListings from "@/components/modules/dashboard/user/ManageListings/ManageListings";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/auth";
import { getAllListingsOfAUser } from "@/services/listing";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa";

const ManageListingsPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
  const { page } = await searchParams;
  const res = await getCurrentUser();
  const result = await getAllListingsOfAUser(res.userId, page);
  const { data, meta } = result;
  return (
    <DashboardContainer>
      {data && data.length > 0 ? (
        <ManageListings listings={data} meta={meta} />
      ) : (
        <div className="min-h-[calc(100vh-100px)] col-span-3 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-lg sm:text-2xl font-bold text-center max-w-screen-sm mx-auto px-8">
            <FaBoxOpen className="text-9xl opacity-35" />
            <h1 className=" text-light-secondary-txt dark:text-dark-secondary-txt">
              Oops! No listings found. 📦 Start adding your items now and showcase them to potential buyers!
            </h1>
            <Link href="/dashboard/user/listings/add-listing">
              <Button variant="primary">
                <Plus />
                <span>Add Listitng</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </DashboardContainer>
  );
};

export default ManageListingsPage;
