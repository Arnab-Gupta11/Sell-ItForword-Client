import AllListings from "@/components/modules/listings/AllListings";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { getAllCategories } from "@/services/category";
import { getAllListings } from "@/services/listing";
import { Metadata } from "next";
import Link from "next/link";
export type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = {
  title: "SellItForword | All Listings",
};
const AllListingsPage = async ({ searchParams }: { searchParams: TSearchParams }) => {
  const query = await searchParams;

  const { data: listings } = await getAllListings(query);
  const result = await getAllCategories();
  return (
    <div>
      <PageHeader title="All Listings">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>listings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <AllListings listings={listings} categories={result?.data} />
    </div>
  );
};

export default AllListingsPage;
