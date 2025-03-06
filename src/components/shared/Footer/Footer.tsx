import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "@/assets/logo/Logo1.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950  text-white">
      <div className="w-full max-w-[90%] mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
          <Image src={logo} alt="logo" width={200} priority className="h-10" />
          <ul className="flex  flex-wrap items-center mb-6 text-sm font-medium text-slate-300 sm:mb-0 mt-6 ">
            <li>
              <Link href={"/"}>
                <span className="hover:border-b pb-0.5 hover:text-primary hover:border-primary duration-700 ease-in-out">Home</span>
              </Link>
            </li>
            <li>
              <Link href={"/listings"}>
                <span className="hover:border-b pb-0.5 hover:text-primary hover:border-primary duration-700 ease-in-out ml-4 md:ml-6 hover:">
                  All Listings
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <span className="hover:border-b pb-0.5 hover:text-primary hover:border-primary duration-700 ease-in-out ml-4 md:ml-6">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="mb-6 border-gray-600 sm:mx-auto sm:mt-6 lg:my-4" />
        <div className="flex items-center justify-center gap-3 mb-3">
          <a href="https://www.facebook.com/arnab.gupta11/">
            <FaInstagram className="hover:scale-110  duration-1000 hover:text-primary" />
          </a>
          <a href="https://www.facebook.com/arnab.gupta11/" target="_blank">
            <FaFacebook className="hover:scale-110 hover:text-primary duration-1000" />
          </a>
          <a href="https://www.facebook.com/arnab.gupta11/" target="_blank">
            <FaTwitter className="hover:scale-110 hover:text-primary duration-1000" />
          </a>
        </div>
        <span className="block text-sm text-gray-500 text-center dark:text-gray-100 ">© 2025 SellItForword . All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
