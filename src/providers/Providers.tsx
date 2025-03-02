import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./ThemeProvider";

// import { Toaster } from "react-hot-toast";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Toaster position="top-right" />

        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
