import RegisterLoginPageToggle from "@/components/modules/auth/RegisterLoginPageToggle.tsx/RegisterLoginPageToggle";
import Image from "next/image";
import React, { ReactNode } from "react";
import loginImage from "@/assets/auth/authPage.png";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen z-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col py-8 items-center justify-center lg:flex-row gap-5 my-10 lg:my-20 mx-5 md:mx-0">
          <div className="hidden lg:block">
            <Image src={loginImage} alt="Login Image" height={500} width={500} />
          </div>
          <div>
            <div className="max-w-[400px]">
              <RegisterLoginPageToggle />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
