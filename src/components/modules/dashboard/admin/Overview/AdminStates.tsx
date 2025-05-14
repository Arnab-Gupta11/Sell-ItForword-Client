import { TAdminStateData } from "@/types/adminMetadat.types";
import { HiOutlineClipboardList, HiOutlineTag } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
const AdminStates = ({ stateData }: { stateData: TAdminStateData }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      <div className="flex items-center gap-6 p-4 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
        <HiOutlineUsers className="w-12 h-12" />
        <div>
          <h1 className="text-lg font-medium text-light-primary-txt dark:text-dark-primary-txt">Total Users</h1>
          <p className="font-bold text-4xl">{stateData?.totalUsers}</p>
        </div>
      </div>
      <div className="flex items-center gap-6 p-4 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
        <HiOutlineTag className="w-12 h-12" />
        <div>
          <h1 className="text-lg font-medium text-light-primary-txt dark:text-dark-primary-txt">Total Categories</h1>
          <p className="font-bold text-4xl">{stateData?.totalCategories}</p>
        </div>
      </div>
      <div className="flex items-center gap-6 p-4 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
        <HiOutlineClipboardList className="w-12 h-12" />
        <div>
          <h1 className="text-lg font-medium text-light-primary-txt dark:text-dark-primary-txt">Total Listings</h1>
          <p className="font-bold text-4xl">{stateData?.totalListings}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminStates;
