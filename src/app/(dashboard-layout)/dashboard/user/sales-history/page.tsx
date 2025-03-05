import SalesHistory from "@/components/modules/dashboard/user/SalesHistory/SalesHistory";
import { getCurrentUser } from "@/services/auth";
import { getSalesHistory } from "@/services/transaction";
import { FaBoxOpen } from "react-icons/fa";

const SalesHistoryPage = async () => {
  const user = await getCurrentUser();
  const res = await getSalesHistory(user.userId);
  return (
    <div>
      {res?.data && res?.data?.result?.length > 0 ? (
        <SalesHistory result={res?.data?.result} meta={res?.data?.meta} />
      ) : (
        <div className="min-h-[calc(100vh-100px)] col-span-3 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-lg sm:text-2xl font-bold text-center max-w-screen-sm mx-auto px-8">
            <FaBoxOpen className="text-9xl opacity-35" />
            <h1 className=" text-light-secondary-txt dark:text-dark-secondary-txt">
              You haven&apos;t made any purchases yet! 🛍️ Start exploring our amazing listings and find something you love.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesHistoryPage;
