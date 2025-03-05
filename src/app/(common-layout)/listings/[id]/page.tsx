import Image from "next/image";
import React from "react";
import { getListingDetails } from "@/services/listing";
import BuyListings from "@/components/modules/transaction/BuyListings";
import { formatPrice } from "@/lib/formatePrice";
import { formatMongoDateToDate } from "@/lib/formateDate";
import { formateDateTime } from "@/lib/formateDateTime";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { BsHeartFill } from "react-icons/bs";

// export async function generateMetadata({ params }: { params: Promise<{ projectId: string }> }) {
//   const { projectId } = await params;
//   const res = await fetch(`https://portfolio-server-psi-jet.vercel.app/api/v1/projects/${projectId}`);
//   const project = await res.json();

//   return {
//     title: project?.data?.name,
//   };
// }

const ListingDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await getListingDetails(id);
  const { data } = res;
  return (
    <div className="pb-28">
      <div className="max-w-screen-xl mx-auto px-3 xs:px-5 md:px-10 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
          <div className="bg-[#F7F7F7] rounded-t-lg h-[450px] flex justify-center rounded-lg">
            <Image
              src={"https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"}
              width={500}
              height={500}
              alt={"img"}
              className="h-full w-full rounded-lg"
            />
          </div>
          <div>
            <div>
              {data?.status === "available" ? (
                <span className="bg-[#ccfdc7] border-2 border-green-400 text-green-900 px-2 py-0.5 text-sm font-semibold rounded-md">Available</span>
              ) : (
                <span className="bg-[#FBE6EC]  text-red-500 px-2 py-0.5 text-sm font-semibold rounded-md">Sold</span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-light-primary-txt dark:text-dark-primary-txt mt-3">{data?.title}</h1>
            <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt text-sm mt-1">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt text-sm">Posted on:</span>{" "}
              {formateDateTime(data?.createdAt)}
            </h4>
            <p className="text-xl font-semibold text-primary mt-4">{formatPrice(data?.price)}</p>
            <h1 className="font-semibold text-light-primary-txt dark:text-dark-primary-txt mt-4">Description:</h1>
            <p className=" text-light-secondary-txt dark:text-dark-secondary-txt">{data?.description}</p>
            <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Category:</span> {data?.category}
            </h4>
            <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Condition:</span> {data?.condition}
            </h4>
            <div className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a] p-3 mt-3 rounded-lg">
              <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Seller Name:</span> {data?.userId?.fullName}
              </h4>
              <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Address:</span> {data?.address}
              </h4>
              <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-1">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">City:</span> {data?.city}
              </h4>
              <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-1">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Phone No:</span> {data?.phone}
              </h4>
            </div>
            <div className="border-t-2 dark:border-[#232935] border-slate-200 mt-5" />
            <div className="mt-5 flex flex-col xsm:flex-row items-center gap-4">
              <div className="flex items-center gap-4 w-full flex-wrap">
                <BuyListings listingsDetails={data} />
                <Button className="py-2 rounded-lg group bg-transparent hover:bg-red-500 border-2 border-red-500 shadow-sm shadow-[#d3d6d7] dark:shadow-[#142e3a]">
                  <BsHeartFill size={234} className="text-red-500 font-bold text-2xl group-hover:text-dark-primary-txt duration-700" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
