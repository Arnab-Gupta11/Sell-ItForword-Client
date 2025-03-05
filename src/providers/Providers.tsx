"use client";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./ThemeProvider";
import UserProvider from "@/context/UserContext";

// import { Toaster } from "react-hot-toast";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <UserProvider>
          <Toaster position="top-right" />
          {children}
        </UserProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
