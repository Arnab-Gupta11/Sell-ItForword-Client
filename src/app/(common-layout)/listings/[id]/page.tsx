import Image from "next/image";
import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { getListingDetails } from "@/services/listing";
import BuyListings from "@/components/modules/transaction/BuyListings";

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
            <h1 className="text-3xl font-bold text-light-primary-txt dark:text-dark-primary-txt">{data?.title}</h1>
            <p className="mt-5 text-light-secondary-txt dark:text-dark-secondary-txt">{data?.description}</p>
            <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Category:</span> {data?.category}
            </h4>
            <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-1">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">City:</span> {data?.city}
            </h4>
            <div className="border-t-2 dark:border-[#232935] border-slate-200 mt-5" />
            <div className="mt-5 flex flex-col xsm:flex-row items-center gap-4">
              <div className="flex items-center gap-4 w-full flex-wrap">
                <BuyListings listingsDetails={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
