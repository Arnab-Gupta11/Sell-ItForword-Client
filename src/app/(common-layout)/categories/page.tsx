import Container from "@/components/shared/Container/Container";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { getAllCategories } from "@/services/category";
import { ICategory } from "@/types/category.types";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = async () => {
  const result = await getAllCategories();
  return (
    <div>
      <PageHeader title="All Category">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cateogires</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 bs:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 pt-20 pb-24 auto-rows-fr">
          {result?.data?.map((item: ICategory) => (
            <Link href={`/listings/categories/${item?._id}`} key={item?._id}>
              <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
                <Image src={item?.icon} alt={item?.name} width={80} height={80} className="w-20 h-20" />
                <div className="h-28 overflow-hidden">
                  <h1 className="text-base font-medium text-light-primary-txt dark:text-dark-primary-txt text-center">{item?.name}</h1>
                  <h1 className="text-sm text-light-secondary-txt dark:text-dark-secondary-txt text-center mt-1">{item?.description}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
