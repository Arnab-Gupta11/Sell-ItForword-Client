import BlogDetailsCard from "@/components/modules/blog/BlogDetailsCard";
import { getBlogDetails } from "@/services/blog";
import { TBlog } from "@/types/blog.types";

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/blogs`);
  const blogs = await res.json();
  return blogs?.data?.slice(0, 3).map((blog: TBlog) => ({
    blogId: blog._id,
  }));
};

export async function generateMetadata({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/api/v1/blogs/${blogId}`);
  const blog = await res.json();

  return {
    title: blog?.data?.title,
    description: blog?.data?.content,
  };
}

const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;
  const res = await getBlogDetails(blogId);
  return (
    <div className="my-10">
      <BlogDetailsCard blog={res?.data} />
    </div>
  );
};

export default BlogDetailsPage;
