import ManageProfile from "@/components/modules/dashboard/user/ManageProfile/ManageProfile";
import { getCurrentUser } from "@/services/auth";
import { getUserProfileDetails } from "@/services/user";

const ProfilePage = async () => {
  const user = await getCurrentUser();
  const res = await getUserProfileDetails(user.userId);
  return (
    <div>
      <ManageProfile userInfo={res?.data} />
    </div>
  );
};

export default ProfilePage;
