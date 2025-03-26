import { Skeleton } from "@/components/ui/skeleton";

const TableSkeletonLoader = () => {
  return (
    <div className="overflow-x-auto rounded-xl pb-10">
      <table className="w-full border border-[#e9ebec] dark:border-[#142e3a] mb-5 select-none -z-10">
        <thead className="bg-light-primary-bg dark:bg-dark-primary-bg">
          <tr>
            <th className="px-4 py-2 text-left border w-32 border-[#e9ebec] dark:border-[#142e3a]">
              <Skeleton className="w-16 h-16" />
            </th>
            <th className="px-4 py-2 text-left border border-[#e9ebec] dark:border-[#142e3a]">
              <Skeleton className="w-32 h-6" />
            </th>
            <th className="px-4 py-2 text-left border border-[#e9ebec] dark:border-[#142e3a]">
              <Skeleton className="w-40 h-6" />
            </th>
            <th className="px-4 py-2 text-left border border-[#e9ebec] dark:border-[#142e3a]">
              <Skeleton className="w-24 h-6" />
            </th>
            <th className="px-4 py-2 text-left border border-[#e9ebec] dark:border-[#142e3a]">
              <Skeleton className="w-20 h-6" />
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(9)].map((_, index) => (
            <tr key={index} className="hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg">
              <td className="px-4 py-2 border w-32 border-[#e9ebec] dark:border-[#142e3a]">
                <Skeleton className="w-16 h-16" />
              </td>
              <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a]">
                <Skeleton className="w-32 h-6" />
              </td>
              <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a]">
                <Skeleton className="w-40 h-6" />
              </td>
              <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a]">
                <Skeleton className="w-24 h-6" />
              </td>
              <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a]">
                <Skeleton className="w-20 h-6" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeletonLoader;
