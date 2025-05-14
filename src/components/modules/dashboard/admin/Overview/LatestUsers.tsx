import Image from "next/image";
import { TAdminUser } from "@/types/adminMetadat.types";
const LatestUsers = ({ result }: { result: TAdminUser[] }) => {
  return (
    <div className="p-4 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
      <div className="mb-5">
        <h1 className="font-medium leading-none text-light-primary-txt dark:text-dark-primary-txt">Latest Users</h1>
      </div>

      <div className="overflow-x-auto rounded-xl">
        <div>
          <table className="w-full  mb-5 select-none -z-10 border border-[#e9ebec] dark:border-[#142e3a]">
            <thead className="bg-light-primary-bg dark:bg-dark-primary-bg">
              <tr>
                <th className="px-4 py-2 text-left border-b w-32  border-[#e9ebec] dark:border-[#142e3a]">Image</th>
                <th className="px-4 py-2 text-left border-b  border-[#e9ebec] dark:border-[#142e3a]">Name</th>
                <th className="px-4 py-2 text-left border-b  border-[#e9ebec] dark:border-[#142e3a]">Email</th>
              </tr>
            </thead>
            <tbody>
              {result?.map((item: TAdminUser) => (
                <tr key={item?._id} className="hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg">
                  <td className="px-4 py-2 border-b w-32  border-[#e9ebec] dark:border-[#142e3a]">
                    <Image
                      src={item?.image}
                      width={20}
                      height={20}
                      alt="Listing Image"
                      className="w-10 h-10 bg-[#F7F7F7] dark:bg-[#101624] p-2 rounded-lg flex-shrink-0"
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.fullName}</td>
                  <td className="px-4 py-2 border-b  border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestUsers;
