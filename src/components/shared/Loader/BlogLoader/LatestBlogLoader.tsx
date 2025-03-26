import BlogCardSkeletonLoader from "./BlogCardSkeletonLoader";

const LatestBlogLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bs:grid-cols-3 gap-5">
      {/* <BlogCard /> */}
      <BlogCardSkeletonLoader />
      <BlogCardSkeletonLoader />
      <BlogCardSkeletonLoader />
    </div>
  );
};

export default LatestBlogLoader;
