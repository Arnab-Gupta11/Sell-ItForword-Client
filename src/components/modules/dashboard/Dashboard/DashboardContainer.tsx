import { ReactNode } from "react";

const DashboardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-md dark:shadow-slate-900 min-h-screen rounded-lg p-5">{children}</div>
  );
};

export default DashboardContainer;
