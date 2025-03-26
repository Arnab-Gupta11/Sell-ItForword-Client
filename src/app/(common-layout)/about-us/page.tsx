import Image from "next/image";
import { ShoppingBag, Users, Star } from "lucide-react";
import { FaTags } from "react-icons/fa";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div>
      <PageHeader title="About Us">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>

      <section className="container mx-auto px-4 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-4">
          <h3 className="text-primary font-semibold uppercase">Who We Are</h3>
          <h2 className="text-3xl lg:text-5xl font-bold text-light-primary-txt dark:text-dark-primary-txt">
            Connecting Buyers & Sellers, Sustainably
          </h2>
          <p className="text-light-secondary-txt dark:text-dark-secondary-txt text-lg leading-relaxed">
            Our marketplace was built with one mission—making buying and selling secondhand items seamless and trustworthy. We empower people to give
            new life to pre-owned goods, reduce waste, and make sustainable choices. Whether you’re looking to declutter or find great deals, our
            platform brings together a community of buyers and sellers in a secure and user-friendly way.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col  xsm:flex-row items-center gap-2 sm:gap-5 p-3 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
              <ShoppingBag className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-light-primary-txt dark:text-dark-primary-txt xsm:text-start text-center">50K+</h3>
                <p className="text-sm text-light-secondary-txt dark:text-dark-secondary-txt xsm:text-start text-center">Items Listed</p>
              </div>
            </div>
            <div className="flex flex-col  xsm:flex-row items-center gap-2 sm:gap-5 p-3 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-light-primary-txt dark:text-dark-primary-txt xsm:text-start text-center">30K+</h3>
                <p className="text-light-secondary-txt dark:text-dark-secondary-txt text-sm xsm:text-start text-center">Active Users</p>
              </div>
            </div>
            <div className="flex flex-col  xsm:flex-row items-center gap-2 sm:gap-5 p-3 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
              <Star className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-light-primary-txt dark:text-dark-primary-txt xsm:text-start text-center">95%</h3>
                <p className="text-light-secondary-txt dark:text-dark-secondary-txt text-sm xsm:text-start text-center">Customer Satisfaction</p>
              </div>
            </div>
            <div className="flex flex-col  xsm:flex-row items-center gap-2 sm:gap-5 p-3 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
              <FaTags className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-light-primary-txt dark:text-dark-primary-txt xsm:text-start text-center">12+</h3>
                <p className="text-light-secondary-txt dark:text-dark-secondary-txt text-sm xsm:text-start text-center">Categories Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 space-y-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgxvtrpmh/image/upload/v1743018342/about-us_amrvag.png"
              alt="Marketplace in action"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
