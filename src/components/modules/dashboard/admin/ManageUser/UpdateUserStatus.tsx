"use client";

import { Button } from "@/components/ui/button";
import { updateUserStatusInfo } from "@/services/user";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateUserStatus = ({ id, status }: { id: string; status: boolean }) => {
  const [loading, setLoading] = useState(false);
  const handleUpdateStatus = async () => {
    try {
      setLoading(true);
      const res = await updateUserStatusInfo(id);
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
      <Button onClick={handleUpdateStatus} disabled={loading} type="submit" variant="primary" className="w-full">
        {loading ? "Updating..." : status ? "Unban user" : "Ban User"}
      </Button>
    </div>
  );
};

export default UpdateUserStatus;
