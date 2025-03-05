import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { formateDateTime } from "@/lib/formateDateTime";
import { formatPrice } from "@/lib/formatePrice";
import { ITransaction } from "@/types/transaction.types";
import Image from "next/image";

const PurchaseDetails = ({ transactionDetails }: { transactionDetails: ITransaction }) => {
  return (
    <DialogContent className="bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-lg h-96 overflow-y-scroll border-none">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">Purchase Details</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-5 mt-4">
        <div className="flex flex-col gap-5 rounded-lg p-4 dark:bg-dark-secondary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
          <div className="w-full flex justify-center bg-light-primary-bg dark:bg-dark-primary-bg rounded-md">
            <Image
              src={"https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"}
              width={200}
              height={200}
              alt={transactionDetails?.listingID?.title}
              className=" object-cover rounded-md p-3"
            />
          </div>

          <div>
            <div className="pb-3">
              <h1 className="text-xl font-bold text-primary mb-4">Listing Information:</h1>
              <div className="flex justify-between flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Title:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.listingID?.title}</span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Price:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">
                  {formatPrice(transactionDetails?.listingID?.price)}
                </span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Condition:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.listingID?.condition}</span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Category:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.listingID?.category}</span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Address:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.listingID?.address}</span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">City:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.listingID?.city}</span>
              </div>
            </div>
            <div className="border-t-2 border-[#e9ebec] dark:border-[#142e3a] pb-3 pt-3">
              <h1 className="text-xl font-bold text-primary mb-4">Seller Information</h1>
              <div className="flex justify-between flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Name:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.sellerID?.fullName}</span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Email:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.sellerID?.email}</span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Phone No:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.listingID?.phone}</span>
              </div>
            </div>
            <div className="border-t-2 border-[#e9ebec] dark:border-[#142e3a] pb-3 pt-3">
              <h1 className="text-xl font-bold text-primary mb-4">Transaction Information</h1>
              <div className="flex justify-between flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Transaction Id:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?._id}</span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Payment Status:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.paymentStatus}</span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Transaction Status:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{transactionDetails?.status}</span>
              </div>
              <div className="flex justify-between mt-2 flex-wrap">
                <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Date & Time:</span>
                <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">
                  {formateDateTime(transactionDetails?.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default PurchaseDetails;
