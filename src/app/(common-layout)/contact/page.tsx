import ContactForm from "@/components/modules/contact/ContactForm";
import { Metadata } from "next";
import { IoCall, IoMailUnreadSharp } from "react-icons/io5";
export const metadata: Metadata = {
  title: "AG | Contact",
  description: "Portfolio",
};
const ContactPage = () => {
  return (
    <div>
      <div className=" pb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 max-w-screen-lg items-center mx-auto gap-3 px-3 xs:px-5 md:px-10 xl:px-0 pt-32 justify-center">
          <div className="md:col-span-2">
            <div className="px-5 lg:px-0 mb-5 flex flex-col md-mx:items-center">
              <h1 className="text-3xl lg:text-5xl  font-semibold text-light-primary-txt dark:text-dark-primary-txt mt-3">
                Get in Touch with SellItForword
              </h1>
              <p className="md:text-justify text-light-secondary-txt dark:text-dark-secondary-txt mb-5 mt-3 text-center">
                Have questions, feedback, or need support? Contact our team, and we’ll be happy to assist you with your buying and selling experience.
              </p>
              <div className="md-mx:flex md-mx:items-center xs-mx:items-start xs  gap-4 flex-wrap">
                <div className="flex items-center gap-4 md:mb-4">
                  <div className="bg-[#FFF2F2] dark:bg-[#101624] rounded-md w-10 h-10">
                    <span className="flex justify-center pt-3">
                      <IoMailUnreadSharp className=" text-[#FF7E84]  "></IoMailUnreadSharp>
                    </span>
                  </div>
                  <div>
                    <p className="text-light-primary-txt dark:text-dark-primary-txt  font-semibold">Email :</p>
                    <p className="text-xs text-light-secondary-txt dark:text-dark-secondary-txt ">arnab.gupta.011@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#EAF9F7] dark:bg-[#101624] rounded-md w-10 h-10">
                    <span className="flex justify-center pt-3">
                      <IoCall className=" text-[#80D7CC]"></IoCall>
                    </span>
                  </div>
                  <div>
                    <p className="text-light-primary-txt dark:text-dark-primary-txt  font-semibold">Call-me :</p>
                    <p className="text-xs text-light-secondary-txt dark:text-dark-secondary-txt ">+8801793109660</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="md:col-span-3 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
