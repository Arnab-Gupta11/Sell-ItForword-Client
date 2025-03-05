import SalesHistory from "@/components/modules/dashboard/user/SalesHistory/SalesHistory";
import { getCurrentUser } from "@/services/auth";
import { getSalesHistory } from "@/services/transaction";

const SalesHistoryPage = async () => {
  const user = await getCurrentUser();
  const res = await getSalesHistory(user.userId);
  console.log(res?.data?.result);
  return (
    <div>
      <SalesHistory result={res?.data?.result} meta={res?.data?.meta} />
    </div>
  );
};

export default SalesHistoryPage;
