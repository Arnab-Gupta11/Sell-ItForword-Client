import Image from "next/image";
import loginImage from "@/assets/auth/authPage.png";
import Link from "next/link";
import LoginForm from "@/components/modules/auth/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen z-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col py-8 items-center lg:flex-row gap-5">
          <div className="hidden md:block">
            <Image src={loginImage} alt="Login Image" height={500} width={500} />
          </div>
          <div className="w-11/12 md:10/12 lg:w-4/12 shadow-xl  shadow-violet-400 text-[#2d373c] bg-base-100 rounded-lg mx-auto">
            <div className="text-center mb-3 mt-3">
              <h1 className="text-xl md:text-4xl lg:px-5 font-bold pt-10 text-[#2d373c]">Login to your account</h1>
              <div className="mt-2 font-medium text-lg">
                Dont have an account?
                <Link href="/register" className="text-[#FF6A25] link link-hover ml-2">
                  Please Register
                </Link>
              </div>
            </div>
            <div className="">
              <LoginForm />
              <hr className="my-5 bg-[#2d373c]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
