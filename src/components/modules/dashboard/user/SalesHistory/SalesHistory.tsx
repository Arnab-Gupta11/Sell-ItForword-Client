"use client";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { formatPrice } from "@/lib/formatePrice";
import { TMeta } from "@/types/global.types";
import { CustomPagination } from "@/components/shared/CustomPagination/CustomPagination";

import { ITransaction } from "@/types/transaction.types";
import { formatMongoDateToDate } from "@/lib/formateDate";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import SalesDetails from "./SalesDetails";
import UpdateTransactionStatus from "./UpdateTransactionStatus";
const SalesHistory = ({ result, meta }: { result: ITransaction[]; meta: TMeta }) => {

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-light-primary-txt dark:text-dark-primary-txt">Sales History</h1>
      </div>

      <div className="overflow-x-auto rounded-xl  pb-10">
        <div>
          <table className="w-full border border-[#e9ebec] dark:border-[#142e3a] mb-5 select-none -z-10">
            <thead className="bg-light-primary-bg dark:bg-dark-primary-bg">
              <tr>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Transaction Id</th>
                <th className="px-4 py-2 text-left border w-32  border-[#e9ebec] dark:border-[#142e3a]">Image</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Title</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Date</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">payment Status</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Transaction Status</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Price</th>
                <th className="px-4 py-2 text-left border border-[#e9ebec] dark:border-[#142e3a]">Action</th>
              </tr>
            </thead>
            <tbody>
              {result?.map((item: ITransaction) => (
                <tr key={item?._id} className="hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg">
                  <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?._id}</td>
                  <td className="px-4 py-2 border w-32  border-[#e9ebec] dark:border-[#142e3a]">
                    <Image
                      src={item?.listingID?.image || "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"}
                      width={20}
                      height={20}
                      alt="Listing Image"
                      className="w-16 h-16 bg-[#F7F7F7] dark:bg-[#101624] p-2 rounded-lg flex-shrink-0"
                    />
                  </td>
                  <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.listingID?.title}</td>
                  <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a] text-sm">{formatMongoDateToDate(item?.createdAt)}</td>
                  <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">
                    {item?.paymentStatus === "completed" ? (
                      <span className="bg-[#d9ffd5] border-2 border-green-300 text-green-600 px-2 py-0.5 text-sm font-semibold rounded-lg">
                        Completed
                      </span>
                    ) : (
                      <span className="bg-[#ffeef3] border-2 border-red-400 text-red-500 px-2 py-0.5 text-sm font-semibold rounded-lg">Pending</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">
                    {item?.status === "completed" ? (
                      <span className="bg-[#d9ffd5] border-2 border-green-300 text-green-600 px-2 py-0.5 text-sm font-semibold rounded-lg">
                        Completed
                      </span>
                    ) : (
                      <span className="bg-[#ffeef3] border-2 border-red-300 text-red-400 px-2 py-0.5 text-sm font-semibold rounded-lg">Pending</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">{formatPrice(item?.listingID?.price)}</td>
                  <td className="px-4 py-2 border w-20  dark:border-[#232935] border-slate-300">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="outline-none hover:scale-105 active:scale-95 duration-700">
                        <BsThreeDots className="mt-2" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        side="bottom"
                        className="bg-light-secondary-bg dark:bg-dark-primary-bg border-none shadow-md shadow-secondary-bg-light outline-none flex flex-col gap-2 p-4"
                      >
                        <Dialog>
                          <DialogTrigger>
                            <span className="hover:text-primary border-2 border-[#e9ebec] dark:border-[#142e3a] py-2 px-5 rounded-lg hover:bg-light-primary-bg dark:hover:bg-dark-secondary-bg font-medium text-sm w-full">
                              Sales Details
                            </span>
                          </DialogTrigger>
                          <SalesDetails transactionDetails={item} />
                        </Dialog>
                        <UpdateTransactionStatus id={item?._id} status={item.status} />
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export default SalesHistory;
