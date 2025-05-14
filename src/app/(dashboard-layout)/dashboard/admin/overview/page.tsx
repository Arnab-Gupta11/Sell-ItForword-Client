import AdminCategoryDistributionChart from "@/components/modules/dashboard/admin/Overview/AdminCategoryDistributionChart";
import AdminConditionDistributionChart from "@/components/modules/dashboard/admin/Overview/AdminConditionDistributionChart";
import AdminStates from "@/components/modules/dashboard/admin/Overview/AdminStates";
import LatestListing from "@/components/modules/dashboard/admin/Overview/LatestListings";
import LatestUsers from "@/components/modules/dashboard/admin/Overview/LatestUsers";
import Spinner from "@/components/shared/Loader/Spinner/Spinner";
import { getMetadata } from "@/services/meta";
import { Suspense } from "react";

const AdminOverviewPage = async () => {
  const result = await getMetadata();
  return (
    <Suspense fallback={<Spinner />}>
      {!result && <h1>Data Not Found</h1>}
      {result && (
        <div>
          <AdminStates stateData={result?.data?.stateData} />
          <div className="grid grid-cols-1 bs:grid-cols-2 gap-5 mt-5">
            <AdminCategoryDistributionChart data={result?.data?.categoryDistribution} />
            <AdminConditionDistributionChart data={result?.data?.listingConditionDistribution} />
          </div>
          <div className="grid grid-cols-1 bs:grid-cols-2 gap-5 mt-5">
            <LatestUsers result={result?.data?.latestUsers} />
            <LatestListing listings={result?.data?.latestListings} />
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default AdminOverviewPage;
