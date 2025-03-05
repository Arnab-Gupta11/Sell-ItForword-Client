import PurchaseHistory from "@/components/modules/dashboard/user/PurchaseHistory/PurchaseHistory";
import { getCurrentUser } from "@/services/auth";
import { getPurchaseHistory } from "@/services/transaction";

const PurchaseHistoryPage = async () => {
  const user = await getCurrentUser();
  const res = await getPurchaseHistory(user.userId);
  console.log(res?.data?.result);
  return (
    <div>
      <PurchaseHistory result={res?.data?.result} meta={res?.data?.meta} />
    </div>
  );
};

export default PurchaseHistoryPage;
