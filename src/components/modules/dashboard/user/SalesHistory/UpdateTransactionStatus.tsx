"use client";

import { Button } from "@/components/ui/button";
import { updateTransactionStatus } from "@/services/transaction";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateTransactionStatus = ({ id, status }: { id: string; status: string }) => {
  const [loading, setLoading] = useState(false);
  const handleUpdateStatus = async () => {
    try {
      setLoading(true);
      const res = await updateTransactionStatus(id);

      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Button onClick={handleUpdateStatus} disabled={loading || status === "completed"} type="submit" variant="primary" className="w-full mt-2.5">
        {loading ? "Updating..." : status === "pending" ? "Update Status" : "Updated"}
      </Button>
    </div>
  );
};

export default UpdateTransactionStatus;
