import { Button } from "@/components/ui/button";
import { formateDateTime } from "@/lib/formateDateTime";
import { formatPrice } from "@/lib/formatePrice";
import { getPaymentSuccessDetails } from "@/services/transaction";
import { CheckCircle } from "lucide-react";
export type TSearchParams = Promise<{ [key: string]: string | undefined }>;
const PaymentSuccessPage = async ({ searchParams }: { searchParams: TSearchParams }) => {
  const { session_id } = await searchParams;
  const paymentDetails = await getPaymentSuccessDetails(session_id!);

  if (!paymentDetails) {
    return <p className="text-center text-red-500 text-lg">Failed to fetch payment details.</p>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center  px-4">
      <div className="w-full max-w-md rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
          <h2 className="mt-4 text-2xl font-semibold text-light-primary-txt dark:text-dark-primary-txt">Payment Successful</h2>
          <p className="text-light-secondary-txt dark:text-dark-secondary-txt">Thank you for your purchase!</p>

          <div className="mt-6 w-full rounded-lg bg-light-primary-bg dark:bg-dark-primary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a] p-4 text-sm">
            <div className="flex justify-between flex-wrap">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Amount Paid:</span>
              <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">
                {formatPrice(paymentDetails?.data?.amount_total)}
              </span>
            </div>
            <div className="flex justify-between mt-2 flex-wrap">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Date & Time:</span>
              <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">
                {formateDateTime(paymentDetails?.data?.createdAt)}
              </span>
            </div>
            <div className="flex justify-between mt-2 flex-wrap">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Transaction Id:</span>
              <span className="font-medium text-light-secondary-txt dark:text-dark-secondary-txt">{paymentDetails?.data?.transactionId}</span>
            </div>
          </div>

          <Button variant="primary" className="mt-5">
            View Orders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
