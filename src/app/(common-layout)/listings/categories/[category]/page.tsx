import { getAllListingsByCategory } from "@/services/listing";
import React from "react";
import { TSearchParams } from "../../page";
import AllListingsByCategory from "@/components/modules/home/Category/AllListingsByCategory";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

const CategoryListingsPage = async ({ params, searchParams }: { params: Promise<{ category: string }>; searchParams: TSearchParams }) => {
  const { category } = await params;
  const query = await searchParams;

  const { data: listings } = await getAllListingsByCategory(category, query);
  return (
    <div>
      <PageHeader title={decodeURIComponent(category)}>
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
      <AllListingsByCategory listings={listings} />
    </div>
  );
};

export default CategoryListingsPage;
