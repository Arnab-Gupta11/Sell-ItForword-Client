import DashboardContainer from "@/components/modules/dashboard/Dashboard/DashboardContainer";
import ManageProfile from "@/components/modules/dashboard/user/ManageProfile/ManageProfile";
import { getCurrentUser } from "@/services/auth";
import { getUserProfileDetails } from "@/services/user";

const ProfilePage = async () => {
  const user = await getCurrentUser();
  const res = await getUserProfileDetails(user.userId);
  return (
    <DashboardContainer>
      <ManageProfile userInfo={res?.data} />
    </DashboardContainer>
  );
};

export default ProfilePage;
