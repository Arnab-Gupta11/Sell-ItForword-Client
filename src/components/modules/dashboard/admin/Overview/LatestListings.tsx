"use client";
import Image from "next/image";
import { formatPrice } from "@/lib/formatePrice";
import { TAdminListing } from "@/types/adminMetadat.types";
const LatestListing = ({ listings }: { listings: TAdminListing[] }) => {
  return (
    <div className="p-4 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
      <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5">
        <h1 className="font-medium leading-none text-light-primary-txt dark:text-dark-primary-txt">Latest Listings</h1>
      </div>
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full border border-[#e9ebec] dark:border-[#142e3a] mb-5 select-none -z-10">
          <thead className="bg-light-primary-bg dark:bg-dark-primary-bg">
            <tr>
              <th className="px-4 py-2 text-left border-b w-24  border-[#e9ebec] dark:border-[#142e3a]">Image</th>
              <th className="px-4 py-2 text-left border-b w-40  border-[#e9ebec] dark:border-[#142e3a]">Title</th>
              <th className="px-4 py-2 text-left border-b  border-[#e9ebec] dark:border-[#142e3a]">Price</th>
              <th className="px-4 py-2 text-left border-b  border-[#e9ebec] dark:border-[#142e3a]">Status</th>
              <th className="px-4 py-2 text-left border-b  border-[#e9ebec] dark:border-[#142e3a]">City</th>
            </tr>
          </thead>
          <tbody>
            {listings?.map((item: TAdminListing) => (
              <tr key={item?._id} className="hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg">
                <td className="px-4 py-2 border-b w-24  border-[#e9ebec] dark:border-[#142e3a]">
                  <Image
                    src={item?.image || "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"}
                    width={20}
                    height={20}
                    alt="Listing Image"
                    className="w-10 h-10 bg-[#F7F7F7] dark:bg-[#101624] p-2 rounded-lg flex-shrink-0"
                  />
                </td>
                <td className="px-4 py-2 w-40 border-b border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.title}</td>
                <td className="px-4 py-2 border-b  border-[#e9ebec] dark:border-[#142e3a] text-sm">{formatPrice(item?.price)}</td>
                <td className="px-4 py-2 border-b  border-[#e9ebec] dark:border-[#142e3a] text-sm">
                  {item?.status === "available" ? (
                    <span className="bg-[#d9ffd5] border-2 border-green-300 text-green-600 px-2 py-0.5 text-sm font-semibold rounded-lg">
                      Available
                    </span>
                  ) : (
                    <span className="bg-[#ffeef3] border-2 border-red-400 text-red-500 px-2 py-0.5 text-sm font-semibold rounded-lg">Sold</span>
                  )}
                </td>
                <td className="px-4 py-2 border-b  border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestListing;
