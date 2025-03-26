import BlogCard from "@/components/modules/blog/BlogCard";
import Container from "@/components/shared/Container/Container";
import AllBlogsSkeletonLoader from "@/components/shared/Loader/BlogLoader/AllBlogsSkeletonLoader";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { getAllBlogs } from "@/services/blog";
import { TBlog } from "@/types/blog.types";
import Link from "next/link";
import React, { Suspense } from "react";

const BlogPage = async () => {
  const result = await getAllBlogs();
  console.log(result);
  return (
    <div>
      <PageHeader title="All Blogs">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blogs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <Container>
        <Suspense fallback={<AllBlogsSkeletonLoader />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 bs:grid-cols-3 gap-5 pt-20 pb-24">
            {result?.data && result?.data.map((item: TBlog) => <BlogCard key={item._id} blog={item} />)}
          </div>
        </Suspense>
      </Container>
    </div>
  );
};

export default BlogPage;
