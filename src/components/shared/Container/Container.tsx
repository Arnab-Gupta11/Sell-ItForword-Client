import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-xl mx-auto px-3 xsm:px-5 bs:px-8 xl:px-0">{children}</div>;
};

export default Container;
