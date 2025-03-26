import Image from "next/image";
import { TRefUser } from "@/types/user.types";
import UpdateUserStatus from "./UpdateUserStatus";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { CustomPagination } from "@/components/shared/CustomPagination/CustomPagination";
import { TMeta } from "@/types/global.types";
const ManageUser = ({ result, meta }: { result: TRefUser[]; meta: TMeta }) => {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-light-primary-txt dark:text-dark-primary-txt">Manage Users</h1>
      </div>

      <div className="overflow-x-auto rounded-xl  pb-10">
        <div>
          <table className="w-full border border-[#e9ebec] dark:border-[#142e3a] mb-5 select-none -z-10">
            <thead className="bg-light-primary-bg dark:bg-dark-primary-bg">
              <tr>
                <th className="px-4 py-2 text-left border w-32  border-[#e9ebec] dark:border-[#142e3a]">Image</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Name</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Email</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Status</th>
                <th className="px-4 py-2 text-left border border-[#e9ebec] dark:border-[#142e3a]">Action</th>
              </tr>
            </thead>
            <tbody>
              {result?.map((item: TRefUser) => (
                <tr key={item?._id} className="hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg">
                  <td className="px-4 py-2 border w-32  border-[#e9ebec] dark:border-[#142e3a]">
                    <Image
                      src={item?.image}
                      width={20}
                      height={20}
                      alt="Listing Image"
                      className="w-16 h-16 bg-[#F7F7F7] dark:bg-[#101624] p-2 rounded-lg flex-shrink-0"
                    />
                  </td>
                  <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.fullName}</td>
                  <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.email}</td>
                  <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">
                    {item?.isBlocked ? (
                      <span className="bg-[#ffeef3] border-2 border-red-300 text-red-400 px-2 py-0.5 text-sm font-semibold rounded-lg">Banned</span>
                    ) : (
                      <span className="bg-[#d9ffd5] border-2 border-green-300 text-green-600 px-2 py-0.5 text-sm font-semibold rounded-lg">
                        Active
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2 border w-20  dark:border-[#232935] border-slate-300">
                    <div className="flex items-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none hover:scale-105 active:scale-95 duration-700">
                          <BsThreeDots className="mt-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          side="bottom"
                          className="bg-[#f7fbfe] dark:bg-[#101624] border-none shadow-md shadow-secondary-bg-light outline-none p-2 flex flex-col gap-2"
                        >
                          <UpdateUserStatus id={item._id} status={item?.isBlocked} />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <CustomPagination meta={meta} />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
