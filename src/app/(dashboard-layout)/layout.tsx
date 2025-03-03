import DashboardLayout from "@/components/modules/dashboard/Dashboard/Dashboard";
import { Metadata } from "next";
import React, { ReactNode } from "react";
export const metadata: Metadata = {
  title: "SellItForword | Dashboard",
  description: "",
};

const DashboardLayoutPage = ({ children }: { children: ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardLayoutPage;
