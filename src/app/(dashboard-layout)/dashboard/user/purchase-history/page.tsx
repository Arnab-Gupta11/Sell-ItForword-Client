import PurchaseHistory from "@/components/modules/dashboard/user/PurchaseHistory/PurchaseHistory";
import { getCurrentUser } from "@/services/auth";
import { getPurchaseHistory } from "@/services/transaction";
import { FaBoxOpen } from "react-icons/fa";

const PurchaseHistoryPage = async () => {
  const user = await getCurrentUser();
  const res = await getPurchaseHistory(user.userId);
  return (
    <div>
      {res?.data && res?.data?.result?.length > 0 ? (
        <PurchaseHistory result={res?.data?.result} meta={res?.data?.meta} />
      ) : (
        <div className="min-h-[calc(100vh-100px)] col-span-3 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-lg sm:text-2xl font-bold text-center max-w-screen-sm mx-auto px-8">
            <FaBoxOpen className="text-9xl opacity-35" />
            <h1 className=" text-light-secondary-txt dark:text-dark-secondary-txt">
              No sales yet! 🚀 List your used items today and start selling to eager buyers.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseHistoryPage;
