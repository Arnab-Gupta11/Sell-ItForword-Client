import { ReactNode } from "react";
const PageHeader = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div className="h-40  bg-light-secondary-bg dark:bg-dark-secondary-bg flex items-center justify-center my-auto shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold text-light-primary-txt dark:text-dark-primary-txt">{title}</h1>
        <div className="flex justify-center mt-3 text-light-secondary-txt dark:text-dark-secondary-txt font-medium">{children}</div>
      </div>
    </div>
  );
};

export default PageHeader;
