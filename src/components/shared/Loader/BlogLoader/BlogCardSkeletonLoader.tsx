import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeletonLoader = () => {
  return (
    <div className="w-full overflow-hidden">
      <figure>
        <Skeleton className="rounded-lg h-64 w-full" />
      </figure>
      <div className="py-4">
        <div className="flex items-center justify-center w-32 h-6 bg-slate-300 dark:bg-slate-800 rounded-md">
          <Skeleton className="w-5 h-5 rounded-full" />
          <Skeleton className="w-16 h-4 ml-2" />
        </div>
        <div className="text-lg font-medium mt-3">
          <Skeleton className="w-3/4 h-6" />
        </div>
        <div className="mt-2">
          <Skeleton className="w-full h-4 mb-1" />
          <Skeleton className="w-5/6 h-4" />
        </div>
        <Skeleton className="mt-3 w-24 h-10 rounded-md" />
      </div>
    </div>
  );
};

export default BlogCardSkeletonLoader;
