"use client";

import { Button } from "@/components/ui/button";
import { UpdateListingsStatus } from "@/services/listing";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateSalesStatus = ({ id, status }: { id: string; status: string }) => {
  const [loading, setLoading] = useState(false);
  const handleUpdateStatus = async () => {
    try {
      setLoading(true);
      const res = await UpdateListingsStatus(id);
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
      <Button onClick={handleUpdateStatus} disabled={loading || status === "sold"} type="submit" variant="primary" className="w-full">
        {loading ? "Updating..." : status === "available" ? "Mark As Sold" : "Sold"}
      </Button>
    </div>
  );
};

export default UpdateSalesStatus;
