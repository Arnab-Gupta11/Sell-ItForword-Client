import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import Link from "next/link";

const PaymentCancelPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <XCircle className="h-16 w-16 text-red-500" />
          <h2 className="mt-4 text-2xl font-semibold text-light-primary-txt dark:text-dark-primary-txt">Payment Canceled</h2>
          <p className="text-light-secondary-txt dark:text-dark-secondary-txt">Your payment was not completed.</p>

          <div className="mt-6 w-full rounded-lg bg-light-primary-bg dark:bg-dark-primary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a] p-4 text-sm">
            <p className="text-light-secondary-txt dark:text-dark-secondary-txt text-center">
              If you encountered an issue, please try again or contact support.
            </p>
          </div>

          <Link href="/">
            <Button className="mt-5 w-full" variant="primary">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelPage;
