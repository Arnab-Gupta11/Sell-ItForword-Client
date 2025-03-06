import Login from "@/components/modules/auth/Login/Login";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </div>
  );
};

export default LoginPage;
