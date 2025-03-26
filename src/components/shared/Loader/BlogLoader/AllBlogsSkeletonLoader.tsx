import React from "react";
import BlogCardSkeletonLoader from "./BlogCardSkeletonLoader";

const AllBlogsSkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bs:grid-cols-3 gap-5 pt-20 pb-24">
      {Array.from({ length: 9 }).map((_, idx) => (
        <BlogCardSkeletonLoader key={idx} />
      ))}
    </div>
  );
};

export default AllBlogsSkeletonLoader;
