"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RegisterLoginPageToggle = () => {
  const pathname = usePathname();
  return (
    <div className="grid w-full grid-cols-2 bg-light-secondary-bg py-1 rounded-md dark:bg-dark-secondary-bg shadow-card-shadow-light dark:shadow-card-shadow-dark">
      <Link href={"/login"}>
        <div
          className={`mx-1 rounded-md pl-2 py-0.5  font-semibold  ${
            pathname === "/login"
              ? "bg-light-primary-bg dark:bg-dark-primary-bg transition-colors duration-700 text-light-primary-txt dark:text-dark-primary-txt"
              : "text-light-secondary-txt dark:text-dark-secondary-txt"
          }`}
        >
          Sign In
        </div>
      </Link>
      <Link href={"/register"}>
        <div
          className={`mx-1 rounded-md pl-2 py-0.5 font-semibold ${
            pathname === "/register"
              ? "bg-light-primary-bg dark:bg-dark-primary-bg transition-colors duration-700 text-light-primary-txt dark:text-dark-primary-txt"
              : "text-light-secondary-txt dark:text-dark-secondary-txt"
          }`}
        >
          Sign Up
        </div>
      </Link>
    </div>
  );
};

export default RegisterLoginPageToggle;
